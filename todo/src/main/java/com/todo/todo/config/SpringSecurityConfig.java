package com.todo.todo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.todo.todo.security.JwtAuthenticationEntryPoint;
import com.todo.todo.security.JwtAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {


    @Autowired
    private UserDetailsService userDetailsService;

    private JwtAuthenticationEntryPoint ep;
    
    private JwtAuthenticationFilter filter;
    
    public SpringSecurityConfig(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();


    }
    @Bean
    SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeHttpRequests(authorizeRequests -> {
//                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/**").hasRole("ADMIN");
//                    authorizeRequests.requestMatchers(HttpMethod.PUT, "/api/**").hasRole("ADMIN");
//                    authorizeRequests.requestMatchers(HttpMethod.DELETE , "/api/**").hasRole("ADMIN");
//                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/**").hasAnyRole("ADMIN", "USER");
//                    authorizeRequests.requestMatchers(HttpMethod.PATCH, "/api/**").hasAnyRole("ADMIN", "USER");
                    authorizeRequests.requestMatchers("/api/auth/**").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll();
//                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/**").permitAll();

                    authorizeRequests.anyRequest().authenticated();
                }).httpBasic(Customizer.withDefaults());
        
        http.exceptionHandling(exception -> exception.authenticationEntryPoint(ep));
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

//    @Bean
//    public UserDetailsService userDetailsService() {
//        UserDetails user = User.builder()
//                .username("kiril")
//                .password(passwordEncoder().encode("123"))
//                .roles("USER")
//                .build();
//
//        UserDetails admin = User.builder()
//                .username("admin")
//                .password(passwordEncoder().encode("admin"))
//                .roles("ADMIN")
//                .build();
//
//        return new InMemoryUserDetailsManager(user, admin);
//    }
}

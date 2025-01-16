package com.todo.todo.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

@Component
public class JwtToeknProvider {

    @Value("${app.jwt-secret")
    private String jwtSecret;

    @Value("${app.jwt-expiration-milliseconds")
    private long jwtExpiration;

    public String generateJwtToken(Authentication authentication) {
        String username = authentication.getName();

        Date currentDate = new Date();

        Date expirationDate = new Date(currentDate.getTime() + jwtExpiration * 1000);

        String token = Jwts.builder()
        		.setSubject(username)
        		.setIssuedAt(new Date())
        		.setExpiration(expirationDate)
        		.signWith(key())
        		.compact();
        
        return token;

    }
    
    public String getUsername(String token) {
    		Claims claims = Jwts.parser()
    		.setSigningKey(key())
    		.build()
    		.parseClaimsJws(token)
    		.getBody(); 
    		
    		String username = claims.getSubject();
    		return username;
    		
    }
    
    public boolean validateToken(String token) {
    	Jwts.parser()
    	.setSigningKey(key())
    	.build()
    	.parse(token);
    	
    	return true;
    	
    	
    }
    
    
    private Key key() {
    	return  Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public JwtToeknProvider() {
    }

    public JwtToeknProvider(String jwtSecret, long jwtExpiration) {
        this.jwtSecret = jwtSecret;
        this.jwtExpiration = jwtExpiration;
    }

    public String getJwtSecret() {
        return jwtSecret;
    }

    public void setJwtSecret(String jwtSecret) {
        this.jwtSecret = jwtSecret;
    }

    public long getJwtExpiration() {
        return jwtExpiration;
    }

    public void setJwtExpiration(long jwtExpiration) {
        this.jwtExpiration = jwtExpiration;
    }
}

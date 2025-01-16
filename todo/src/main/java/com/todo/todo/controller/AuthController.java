package com.todo.todo.controller;

import com.todo.todo.dto.JwtAuthResponse;
import com.todo.todo.dto.LoginDto;
import com.todo.todo.dto.RegisterDto;
import com.todo.todo.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private  AuthService authService;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        String response = authService.register(registerDto);
        return ResponseEntity.ok(response);
    }


    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDto loginDto) {
        String token = authService.login(loginDto);
        
        JwtAuthResponse res = new JwtAuthResponse();
        res.setAccessToken(token);
        
        return ResponseEntity.ok(res);
    }
}

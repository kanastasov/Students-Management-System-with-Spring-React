package com.todo.todo.controller;

import com.todo.todo.dto.RegisterDto;
import com.todo.todo.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private  AuthService authService;


    @PostMapping("/register")
    public ResponseEntity<String> register(RegisterDto registerDto) {
        String response = authService.register(registerDto);
        return ResponseEntity.ok(response);
    }
}

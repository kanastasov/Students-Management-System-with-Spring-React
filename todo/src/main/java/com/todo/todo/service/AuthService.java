package com.todo.todo.service;

import com.todo.todo.dto.LoginDto;
import com.todo.todo.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);

}

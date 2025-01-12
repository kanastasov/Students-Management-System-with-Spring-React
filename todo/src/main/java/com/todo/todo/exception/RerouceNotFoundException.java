package com.todo.todo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RerouceNotFoundException extends RuntimeException {

    public RerouceNotFoundException(String message) {
        super(message);
    }
}

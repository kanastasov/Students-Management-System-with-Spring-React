package com.todo.todo.exception;

import org.springframework.http.HttpStatus;

public class TodoApiException extends RuntimeException {
    private HttpStatus status;
    private String message;

    public TodoApiException(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public TodoApiException(String message, HttpStatus status, String message1) {
        super(message);
        this.status = status;
        this.message = message1;
    }

    public TodoApiException(String message, Throwable cause, HttpStatus status, String message1) {
        super(message, cause);
        this.status = status;
        this.message = message1;
    }

    public TodoApiException(Throwable cause, HttpStatus status, String message) {
        super(cause);
        this.status = status;
        this.message = message;
    }

    public TodoApiException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, HttpStatus status, String message1) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.status = status;
        this.message = message1;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

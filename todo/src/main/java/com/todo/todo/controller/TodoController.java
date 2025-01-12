package com.todo.todo.controller;

import com.todo.todo.dto.TodoDto;
import com.todo.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/todos")
public class TodoController {

    @Autowired
    private TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
       TodoDto savedDto= service.addTodo(todoDto);
       return new ResponseEntity<>(savedDto, HttpStatus.CREATED);
    }



}

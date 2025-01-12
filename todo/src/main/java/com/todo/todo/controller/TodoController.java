package com.todo.todo.controller;

import com.todo.todo.dto.TodoDto;
import com.todo.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/todos")
public class TodoController {

    @Autowired
    private TodoService service;
    @Autowired
    private TodoService todoService;

    public TodoController(TodoService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
       TodoDto savedDto= service.addTodo(todoDto);
       return new ResponseEntity<>(savedDto, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long id){
        TodoDto todoDto = todoService.getTodo(id);

        return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }




}

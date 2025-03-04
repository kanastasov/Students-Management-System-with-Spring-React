package com.todo.todo.controller;

import com.todo.todo.dto.TodoDto;
import com.todo.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
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


    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
       TodoDto savedDto= service.addTodo(todoDto);
       return new ResponseEntity<>(savedDto, HttpStatus.CREATED);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long id){
        TodoDto todoDto = todoService.getTodo(id);

        return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos(){
        List<TodoDto> todoDto = todoService.getAllTodos();

        return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<TodoDto> updateTodo(@RequestBody TodoDto todoDto, @PathVariable("id") Long id){
        TodoDto todoDtoSaved = todoService.updateDto(todoDto, id);
        return new ResponseEntity<>(todoDtoSaved, HttpStatus.OK);
    }


    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<TodoDto> deleteTodo(@PathVariable("id") Long id){
         todoService.deleteDto(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("{id}/complete")
    public ResponseEntity<TodoDto> completeTodo(@PathVariable("id") Long id){
        TodoDto todoDtoSaved = todoService.completeTodo(id);
        return new ResponseEntity<>(todoDtoSaved, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("{id}/incomplete")
    public ResponseEntity<TodoDto> incompleteTodo(@PathVariable("id") Long id){
        TodoDto todoDtoSaved = todoService.inCompleteTodo(id);
        return new ResponseEntity<>(todoDtoSaved, HttpStatus.OK);
    }



}

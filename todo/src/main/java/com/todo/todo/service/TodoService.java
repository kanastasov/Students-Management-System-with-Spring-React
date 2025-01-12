package com.todo.todo.service;

import com.todo.todo.dto.TodoDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TodoService {

    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long id);

    List<TodoDto> getAllTodos();

    TodoDto updateDto(TodoDto todoDto, Long id);

    void deleteDto(Long id);

    TodoDto completeTodo(Long id);

    TodoDto inCompleteTodo(Long id);


}

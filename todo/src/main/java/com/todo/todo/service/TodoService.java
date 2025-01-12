package com.todo.todo.service;

import com.todo.todo.dto.TodoDto;
import org.springframework.stereotype.Service;

public interface TodoService {

    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long id);
}

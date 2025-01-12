package com.todo.todo.service.imp;

import com.todo.todo.dto.TodoDto;
import com.todo.todo.entity.Todo;
import com.todo.todo.repository.TodoRepository;
import com.todo.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImp implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {

        Todo todo = new Todo();
        todo.setTitle(todoDto.getTitle());
        todo.setCompleted(todoDto.isCompleted());
        todo.setDescription(todoDto.getDescription());


        Todo savedTodo = todoRepository.save(todo);

        TodoDto savedDto = new TodoDto();
        savedDto.setId(savedTodo.getId());
        savedDto.setCompleted(savedTodo.isCompleted());
        savedDto.setDescription(savedTodo.getDescription());
        savedDto.setTitle(savedTodo.getTitle());


        return savedDto;
    }
}

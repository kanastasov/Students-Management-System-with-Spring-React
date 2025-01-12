package com.todo.todo.service.imp;

import com.todo.todo.dto.TodoDto;
import com.todo.todo.entity.Todo;
import com.todo.todo.exception.RerouceNotFoundException;
import com.todo.todo.repository.TodoRepository;
import com.todo.todo.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImp implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private ModelMapper modelMapper;

    public TodoServiceImp(TodoRepository todoRepository, ModelMapper modelMapper) {
        this.todoRepository = todoRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        Todo todo = modelMapper.map(todoDto, Todo.class);
        Todo savedTodo = todoRepository.save(todo);
        TodoDto savedTodoDto = modelMapper.map(savedTodo, TodoDto.class);
        return savedTodoDto;
    }

    @Override
    public TodoDto getTodo(Long id) {

       Todo todo =  todoRepository.findById(id).orElseThrow(() -> new RerouceNotFoundException("Todo with this id not found: " + id));


        return modelMapper.map(todo, TodoDto.class);
    }



}

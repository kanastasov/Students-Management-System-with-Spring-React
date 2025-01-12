package com.todo.todo.service.imp;

import com.todo.todo.dto.TodoDto;
import com.todo.todo.entity.Todo;
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


    @Override
    public TodoDto addTodo(TodoDto todoDto) {

//        Todo todo = new Todo();
//        todo.setTitle(todoDto.getTitle());
//        todo.setCompleted(todoDto.isCompleted());
//        todo.setDescription(todoDto.getDescription());


        Todo todo = modelMapper.map(todoDto, Todo.class);

        Todo savedTodo = todoRepository.save(todo);
//        TodoDto savedDto = new TodoDto();
//        savedDto.setId(savedTodo.getId());
//        savedDto.setCompleted(savedTodo.isCompleted());
//        savedDto.setDescription(savedTodo.getDescription());
//        savedDto.setTitle(savedTodo.getTitle());

        TodoDto savedTodoDto = modelMapper.map(savedTodo, TodoDto.class);

        return savedTodoDto;
    }


    public TodoServiceImp(TodoRepository todoRepository, ModelMapper modelMapper) {
        this.todoRepository = todoRepository;
        this.modelMapper = modelMapper;
    }
}

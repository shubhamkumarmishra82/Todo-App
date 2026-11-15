package com.todoapp.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.todoapp.DTO.TodoAppRequest;
import com.todoapp.DTO.UpdateTodoDTO;
import com.todoapp.entity.AddTodo;
import com.todoapp.exception.UserAlreadyExistsException;
import com.todoapp.repository.AddTodoRepository;
@Service
public class AddTodoService {
@Autowired
private AddTodoRepository addTodoRepo;
public AddTodo addTodo(TodoAppRequest request , String email) {
	AddTodo todo = new AddTodo();
	todo.setTitle(request.getTitle());
	todo.setDescription(request.getDescription());
	todo.setPriority(request.getPriority());
	todo.setDuedate(request.getDuedate());
	todo.setEmail(email);
	todo.setStatus("Pending");
	
	return addTodoRepo.save(todo);
	
}
public List<AddTodo> getItem(String email){
	return addTodoRepo.findByEmail(email);
}

public Optional<AddTodo> getById(Long id , String email){
	return addTodoRepo.findByIdAndEmail(id , email);
}
public AddTodo updateById(UpdateTodoDTO request, Long id, String email) {

    AddTodo addTodo = getById(id, email)
            .orElseThrow(() -> new UserAlreadyExistsException("Todo Not Found"));

    addTodo.setTitle(request.getTitle());
    addTodo.setDescription(request.getDescription());
    addTodo.setPriority(request.getPriority());
    addTodo.setDuedate(request.getDuedate());
    addTodo.setStatus(request.getStatus());

    return addTodoRepo.save(addTodo);
}
public void deleteTodoById(Long id , String email) {
	AddTodo addTodo =  getById(id, email).
			orElseThrow(()-> new UserAlreadyExistsException("Todo Not Found"));
	 addTodoRepo.delete(addTodo);
			
}
}

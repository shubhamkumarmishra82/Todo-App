package com.todoapp.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.todoapp.DTO.TodoAppRequest;
import com.todoapp.DTO.UpdateTodoDTO;
import com.todoapp.service.AddTodoService;
import org.springframework.security.core.Authentication;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/todos")
public class AddTodoController {
@Autowired
private AddTodoService addTodoService;
@PostMapping("/additem")
public ResponseEntity<?> addTodo(@Valid
        @RequestBody TodoAppRequest request,
        Authentication authentication) {
  
    String email = authentication.getName();
    

    return ResponseEntity.ok(addTodoService.addTodo(request, email));
}
@GetMapping("/getitem")
public ResponseEntity<?> getItem(Authentication authentication){
	String email = authentication.getName();
	
	return new ResponseEntity<>(addTodoService.getItem(email) , HttpStatus.OK);
}
@GetMapping("getitem/{id}")
public ResponseEntity<?> getById(@PathVariable Long id , Authentication authentication){
	String email = authentication.getName();
	return new ResponseEntity<>(addTodoService.getById(id , email), HttpStatus.OK);
}
@PutMapping("/update/{id}")
public ResponseEntity<?> updateTodo(@Valid @RequestBody UpdateTodoDTO request  , @PathVariable Long id , Authentication authentication){
  String email = authentication.getName();
 return new ResponseEntity<>(addTodoService.updateById(request, id, email) , HttpStatus.OK);
}
@DeleteMapping("delete/{id}")
public ResponseEntity<?> deleteTodoById(@PathVariable Long id , Authentication authentication){
	String email = authentication.getName();
	 addTodoService.deleteTodoById(id, email);
	 return ResponseEntity.ok("Deleted SuccessFully");
}

}

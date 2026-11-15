package com.todoapp.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todoapp.entity.AddTodo;
@Repository
public interface AddTodoRepository extends JpaRepository<AddTodo , Long> {
	List<AddTodo> findByEmail(String Email);
	Optional<AddTodo> findByIdAndEmail(Long id , String email);
}

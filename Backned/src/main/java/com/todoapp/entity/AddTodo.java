package com.todoapp.entity;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="todo-item")
public class AddTodo {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Long id;
private String title;
private String description;
private String priority;
private LocalDate duedate;
private String email;
private String status;
public Long getId() {
	return id;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public void setId(Long id) {
	this.id = id;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getPriority() {
	return priority;
}
public void setPriority(String priority) {
	this.priority = priority;
}
public LocalDate getDuedate() {
	return duedate;
}
public void setDuedate(LocalDate duedate) {
	this.duedate = duedate;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
}

package com.todoapp.DTO;

import jakarta.validation.constraints.*;
import java.time.LocalDate;

public class TodoAppRequest {
@NotBlank( message="Title is Required")
@Size(min=4 , max=20 )
private String title;
@NotBlank(message="description is Required")
@Size(min=50 , max=300 )
private String description;
@Pattern(regexp = "High|Medium|Low", message = "Priority must be HIGH, MEDIUM or LOW")
private String priority;
@NotNull(message="dueDate is required")
private LocalDate duedate;
@NotBlank(message = "status is required")

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


}

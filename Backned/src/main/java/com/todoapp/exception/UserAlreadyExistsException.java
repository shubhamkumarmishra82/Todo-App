package com.todoapp.exception;
public class UserAlreadyExistsException extends RuntimeException {
        public UserAlreadyExistsException(String message) {
        	super(message);
        }
}

package com.todoapp.service;

import com.todoapp.DTO.RegisterRequest;
import com.todoapp.entity.Register;
import com.todoapp.exception.UserAlreadyExistsException;
import com.todoapp.repository.RegisterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
    private RegisterRepository registerRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
   

    public String registerUser(RegisterRequest request) {

        // check if email already exists
        if (registerRepo.findByEmail(request.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException("Email Already Registered");
        }

      Register register = new Register();
        register.setName(request.getName());
        register.setEmail(request.getEmail());
        register.setPassword(passwordEncoder.encode(request.getPassword()));

       
        registerRepo.save(register);

        return "User Registered Successfully";
    }
}
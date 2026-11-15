package com.todoapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todoapp.DTO.LoginDto;
import com.todoapp.config.JwtUtil;
import com.todoapp.entity.Register;
import com.todoapp.repository.RegisterRepository;



@RestController
@RequestMapping("/api/auth")
public class LoginController {
@Autowired 
private RegisterRepository registerRepository;
@Autowired
private PasswordEncoder passwordEncoder;
@PostMapping("/login")
public ResponseEntity<String> loginVerify(
        @RequestBody LoginDto login) {

    Optional<Register> userOpt = registerRepository.findByEmail(login.getEmail());

    if (userOpt.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Invalid Email");
    }

    Register user = userOpt.get();

    if (!passwordEncoder.matches(login.getPassword(), user.getPassword())) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Wrong Password");
    }
    String token = JwtUtil.generateToken(user.getEmail());

    return new ResponseEntity<>(token , HttpStatus.OK);
}

}

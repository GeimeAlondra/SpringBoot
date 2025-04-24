package com.introduction.springboot.web.springboot_web.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.introduction.springboot.web.springboot_web.models.User;

@RestController
@RequestMapping("/api")
public class UserRestController {

  @GetMapping("/detalles")
  public Map<String, Object> detalles() {
    
    User user = new User("Alondra", "López");	

    Map<String, Object> body = new HashMap<>();
    body.put("title", "Hola desde Spring Boot");
    body.put("user",  user);

    return body;
  }
}

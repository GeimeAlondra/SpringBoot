package com.introduction.springboot.web.springboot_web.controllers;

import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/detalles")
    public String detalles() {
        return "detalles";
    }

}

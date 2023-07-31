package org.factoriaf5.EventsOnline.controllers;
import java.util.List;

import org.factoriaf5.EventsOnline.models.User;
import org.factoriaf5.EventsOnline.services.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class UserController {
    UserService service;
    public UserController(UserService service){
        this.service = service;
    }
    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(path = "/users")
    public List<User> index(){
        List<User> users = service.getAll();
        return users;
    }
}

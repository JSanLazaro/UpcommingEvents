package org.factoriaf5.EventsOnline.controllers;

import org.factoriaf5.EventsOnline.models.User;
import org.factoriaf5.EventsOnline.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController

public class RegisterController {
    UserService userService;

    public RegisterController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins="http://localhost:4200/")
    @PostMapping(path = "/users/register")
    public ResponseEntity<?> register(@RequestBody User user) throws Throwable{
        try{
            User userStored = userService.save(user);
            return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(userStored);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    
}

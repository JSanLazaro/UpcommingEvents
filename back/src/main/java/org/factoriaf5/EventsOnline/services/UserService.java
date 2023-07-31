package org.factoriaf5.EventsOnline.services;

import java.util.List;

import org.factoriaf5.EventsOnline.models.User;
import org.factoriaf5.EventsOnline.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    UserRepository repository;
    public UserService(UserRepository repository){
        this.repository = repository;
    }
    public List<User> getAll(){
        List<User> users = repository.findAll();
        return users;
    }
    
}

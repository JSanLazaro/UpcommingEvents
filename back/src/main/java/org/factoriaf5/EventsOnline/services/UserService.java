package org.factoriaf5.EventsOnline.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.factoriaf5.EventsOnline.models.Role;
import org.factoriaf5.EventsOnline.models.User;
import org.factoriaf5.EventsOnline.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    UserRepository userRepository;
    RoleService roleService;

    public UserService(UserRepository repository, RoleService roleService){
        this.userRepository = repository;
        this.roleService = roleService;
    }
    
    public List<User> getAll(){
        List<User> users = userRepository.findAll();
        return users;
    }

    public User save(User user) throws Throwable{
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        this.assignDefaultRole(user);

        return userRepository.save(user);
    }

    public void assignDefaultRole(User user) throws Throwable {

        Role defaultRole = roleService.show(2L);
        Set<Role> roles = new HashSet<>();
        roles.add(defaultRole);

        user.setRoles(roles);
    }
    
}

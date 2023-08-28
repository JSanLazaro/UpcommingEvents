package org.factoriaf5.EventsOnline.services;

import org.factoriaf5.EventsOnline.models.Role;
import org.factoriaf5.EventsOnline.repositories.RoleRepository;
import org.springframework.stereotype.Service;

@Service
public class RoleService {
    RoleRepository repository;

    public RoleService(RoleRepository repository) {
        this.repository = repository;
    }

    public Role show(Long id) throws Throwable{
        return repository.findById(id).orElseThrow(()->new Throwable("Role not found"));
    }
    
}

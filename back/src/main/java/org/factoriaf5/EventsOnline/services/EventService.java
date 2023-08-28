package org.factoriaf5.EventsOnline.services;

import java.util.List;
import java.util.Optional;

import org.factoriaf5.EventsOnline.models.OnlineEvent;
import org.factoriaf5.EventsOnline.repositories.EventRepository;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    EventRepository repository;
    public EventService(EventRepository repository){
        this.repository = repository;
    }
    public List<OnlineEvent> getAll(){
        List<OnlineEvent> events = repository.findAll();
        return events;
    }
    public Optional<OnlineEvent> getEventById(long id){
        return repository.findById(id);
        
    }    
}

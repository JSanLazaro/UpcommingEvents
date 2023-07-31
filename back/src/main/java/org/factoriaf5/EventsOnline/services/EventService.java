package org.factoriaf5.EventsOnline.services;

import java.util.List;

import org.factoriaf5.EventsOnline.models.Event;
import org.factoriaf5.EventsOnline.repositories.EventRepository;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    EventRepository repository;
    public EventService(EventRepository repository){
        this.repository = repository;
    }
    public List<Event> getAll(){
        List<Event> events = repository.findAll();
        return events;
    }
    
}

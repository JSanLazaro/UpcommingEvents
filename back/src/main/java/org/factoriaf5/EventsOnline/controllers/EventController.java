package org.factoriaf5.EventsOnline.controllers;

import java.util.List;
import java.util.Optional;

import org.factoriaf5.EventsOnline.models.OnlineEvent;
import org.factoriaf5.EventsOnline.services.EventService;
import org.springframework.http.ResponseEntity;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class EventController {
    private EventService service;

    public EventController(EventService service) {
        this.service = service;
    }

    
    @GetMapping(path = "/events")
    public List<OnlineEvent> index() {
        List<OnlineEvent> events = service.getAll();
        return events;
    }
    @GetMapping(path = "/events/{id}")
    public ResponseEntity<OnlineEvent> getEventById(@PathVariable Long id){
        Optional<OnlineEvent> optionalEvent = service.getEventById(id);
        if(optionalEvent.isPresent()){
            OnlineEvent event = optionalEvent.get();
            return ResponseEntity.ok(event);
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}

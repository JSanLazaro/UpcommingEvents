package org.factoriaf5.EventsOnline.controllers;

import java.util.List;

import org.factoriaf5.EventsOnline.models.Event;
import org.factoriaf5.EventsOnline.services.EventService;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class EventController {
    private EventService service;

    public EventController(EventService service) {
        this.service = service;
    }

    
    @GetMapping(path = "/events")
    public List<Event> index() {
        List<Event> events = service.getAll();
        return events;
    }
}

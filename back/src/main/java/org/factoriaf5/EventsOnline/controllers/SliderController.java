package org.factoriaf5.EventsOnline.controllers;

import java.util.List;

import org.factoriaf5.EventsOnline.models.Slider;
import org.factoriaf5.EventsOnline.services.SliderService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class SliderController {
    private SliderService service;
    public SliderController(SliderService sliderService){
        this.service = sliderService;
    }

    @GetMapping(path="/sliders")
    public List<Slider> index(){
        List<Slider> sliders = service.getAll();
        return sliders;
    }
}

package org.factoriaf5.EventsOnline.services;

import java.util.List;

import org.factoriaf5.EventsOnline.models.Slider;
import org.factoriaf5.EventsOnline.repositories.SliderRepository;
import org.springframework.stereotype.Service;

@Service
public class SliderService {
    SliderRepository repository;
    public SliderService(SliderRepository sliderRepository){
        this.repository = sliderRepository;
    }
    public List<Slider> getAll(){
        List<Slider> sliders = repository.findAll();
        return sliders;
    }
}

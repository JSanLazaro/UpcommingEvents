import { Injectable } from '@angular/core';
import { Slider } from '../models/Slider.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private baseUrl = 'http://localhost:8081'
  constructor(private http:HttpClient) { }
  getSliders():Observable<Slider[]>{
    return this.http.get<Slider[]>(this.baseUrl + "/sliders");
  }
}

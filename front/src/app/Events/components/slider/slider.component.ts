import { Component } from '@angular/core';
import { SliderService } from '../../services/slider.service';
import { Slider } from '../../models/Slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  errorMessage!:string;
  sliders!:Slider[];
  transform:number = 0;
  selectedIndex:number = 0;
  indice:number = 1;
 constructor(private sliderService: SliderService){
this.transform = 0;
 }
 ngOnInit(){
  this.sliderService.getSliders().subscribe((data:Slider[])=>{
    console.log("slider component ngOnInit-> data=" + data);
    this.sliders = data;
    console.log("slider component ngOnInit-> this.sliders[1].id=" + this.sliders[1].id);
  },error=>{this.errorMessage = <any>error; console.log(this.errorMessage)}
  );
  this.automaticSlide();
  
 }
 automaticSlide(){
  this.selectedIndex++;
  if (this.selectedIndex>4){
    this.selectedIndex = 0;
  }
  this.transform = 0 - (this.selectedIndex) * 100;
  //console.log("sliderComponent automaticSlide=> this.selectedIndex = "+this.selectedIndex);
  setTimeout(()=>this.automaticSlide(),2000);// Change every 2 seconds

 }
}

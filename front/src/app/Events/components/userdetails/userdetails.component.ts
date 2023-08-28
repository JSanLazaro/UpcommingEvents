import { Component } from '@angular/core';
import { OnlineEvent } from '../../models/OnlineEvent.model';
import { OnlineEventService } from '../../services/online-event.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent {
  onlineEvent!:OnlineEvent;
  constructor(private eventService:OnlineEventService){}
  ngOnInit(){
    this.eventService.getEventById(1).subscribe((data:OnlineEvent)=>{
      this.onlineEvent = data;  
      console.log("userDetails.ts ngOnInit-->onlineEvent="+this.onlineEvent.title);
    })
  }
}

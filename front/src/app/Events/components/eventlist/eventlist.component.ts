import { Component, ViewChild } from '@angular/core';
import { OnlineEvent } from '../../models/OnlineEvent.model';
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'; 
import { OnlineEventService } from '../../services/online-event.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent {
  columnas: string[] = ['title', 'description', 'buttons'];

  events!:OnlineEvent[];
  dataSource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private eventService:OnlineEventService){}
  ngOnInit(){
    this.eventService.getEvents().subscribe((data:OnlineEvent[])=>{
      this.events = data;
      console.log("eventlist component ngOnInit --> this.events = "+this.events);
      this.dataSource = new MatTableDataSource<OnlineEvent>(this.events);
      this.dataSource.paginator = this.paginator;
    })
  }
}

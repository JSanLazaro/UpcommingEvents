import { Component, ViewChild } from '@angular/core';
import { OnlineEvent } from '../../models/OnlineEvent.model';
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'; 
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent {
  columnas: string[] = ['title', 'description', 'hour','date','maxp','img_url'];

  events!:OnlineEvent[];
  dataSource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private eventService:EventService){}
  ngOnInit(){
    this.eventService.getEvents().subscribe((data:OnlineEvent[])=>{
      this.events = data;
      this.dataSource = new MatTableDataSource<OnlineEvent>(this.events);
      this.dataSource.paginator = this.paginator;
    })
  }
}

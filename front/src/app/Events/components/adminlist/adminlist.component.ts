import { Component, ViewChild } from '@angular/core';
import { OnlineEvent } from '../../models/OnlineEvent.model';
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'; 
import { EventService } from '../../services/event.service';
import { OnlineEventService } from '../../services/online-event.service';
@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent {
  columnas: string[] = ['title', 'description', 'hour','date','max_participants','img_url','function'];

  events!:OnlineEvent[];
  dataSource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private oeService:OnlineEventService){}
  ngOnInit(){
    this.oeService.getEvents().subscribe((data:OnlineEvent[])=>{
      this.events = data;
      this.dataSource = new MatTableDataSource<OnlineEvent>(this.events);
      this.dataSource.paginator = this.paginator;
    })
  }
}

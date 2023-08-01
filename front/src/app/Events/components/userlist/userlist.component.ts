import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { OnlineEvent } from '../../models/OnlineEvent.model';
import { MatTableDataSource } from '@angular/material/table';
import { OnlineEventService } from '../../services/online-event.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  columnas: string[] = ['title', 'description', 'buttons'];
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

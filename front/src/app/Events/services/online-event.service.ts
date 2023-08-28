import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { OnlineEvent } from '../models/OnlineEvent.model';
@Injectable({
  providedIn: 'root'
})
export class OnlineEventService {
  private baseUrl = 'http://localhost:8081'
  constructor(private http:HttpClient) { }
  getEvents():Observable<OnlineEvent[]>{
    return this.http.get<OnlineEvent[]>(this.baseUrl + "/events");
  }
  getEventById(id:number):Observable<OnlineEvent>{
    console.log("online-eventService getEventById-->id="+id);
    let observable = this.http.get<OnlineEvent>(this.baseUrl+"/events/"+id);
    return observable;    
  }
}

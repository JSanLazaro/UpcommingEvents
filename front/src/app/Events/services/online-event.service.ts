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
}

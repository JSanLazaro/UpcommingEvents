import { Component } from '@angular/core';
import { OnlineEvent } from '../../models/OnlineEvent.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent {
  onlineEvent!:OnlineEvent;
}

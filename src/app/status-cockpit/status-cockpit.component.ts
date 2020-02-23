import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-cockpit',
  templateUrl: './status-cockpit.component.html',
  styleUrls: ['./status-cockpit.component.scss']
})
export class StatusCockpitComponent implements OnInit {

  data = [
    {Applikation: 'Website', Timestamp: new Date()},
    {Applikation: 'Performance Dashboard', Timestamp: new Date()},
    {Applikation: 'Status Cockpit', Timestamp: new Date()}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

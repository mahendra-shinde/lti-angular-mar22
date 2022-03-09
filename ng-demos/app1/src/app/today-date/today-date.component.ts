import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'today-date',
  template: `
    <h3>Today : {{ today }} </h3>
  `,
  styleUrls: ['./today-date.component.css']
})
export class TodayDateComponent implements OnInit {

  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

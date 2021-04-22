import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html'
})
export class PlanTableComponent implements OnInit, DoCheck {
  @Input() emailEmitter = '';
  @Input() planEmitter = '';
  @Input() dateEmitter = '';

  titles: Array<string> = ['Email', 'Plan Name', 'Plan Start Date'];
  emails: Array<string> = [];
  planNames: Array<string> = [];
  dates: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.refresh();
  }

  refresh(): void {
    this.emails.push(this.emailEmitter);
    this.planNames.push(this.planEmitter);
    this.dates.push(this.dateEmitter);
    console.log(this.emailEmitter);
  }
 }

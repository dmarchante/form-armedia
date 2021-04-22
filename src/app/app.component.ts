import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { ValidationService } from './validation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-armedia';
  email = '';
  plan = '';
  date = '';

  sendEmail(email: string): void {
    this.email = email;
  }

  sendPlan(plan: string): void {
    this.plan = plan;
  }

  sendDate(date: any): void {
    this.date = date;
  }

}

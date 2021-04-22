import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})

export class SubscriberComponent implements OnInit {
  @Output() emailEmitter = new EventEmitter<string>();
  @Output() planEmitter = new EventEmitter<string>();
  @Output() dateEmitter = new EventEmitter<number>();

  isSubmitted = false;
  Plan: Array<string> = ['Basic', 'Advanced', 'Pro'];
  planSelectionForm = new FormGroup({
    email: new FormControl(),
    planName: new FormControl(),
    password: new FormControl(),
    passwordVerification: new FormControl()
  });
  userPlan = {
    email: '',
    planName: '',
    startDate: 0
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.planSelectionForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      ],
      planName: [this.Plan[1], Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/[a-zA-Z]/),
        Validators.pattern(/\W|_/g),
        Validators.minLength(8)
      ])
      ],
      passwordVerification: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/[a-zA-Z]/),
        Validators.pattern(/\W|_/g),
        Validators.minLength(8),
      ])
      ],
      startDate: ['']}, { validator: [this.validatePasswords]}
    );
  }


  ngOnInit(): void {
    console.group(this.planSelectionForm.controls);
    }

  clearForm(): void {
    alert('This will clear your data and fields you have filled out will be lost.');
    this.planSelectionForm.reset();
    this.clearForm();
  }

  onSubmit(): void {
    const startDate = Date.now();

    const data = JSON.stringify(this.planSelectionForm.value);
    const encodedURI = encodeURIComponent(data);
    const uri = `data:application/json;charset=UTF-8,${encodedURI}`;
    const a = document.createElement('a');
    a.href = uri;
    a.innerHTML = 'Right click for json data object';
    document.body.appendChild(a);

    this.emailEmitter.emit(this.f.email.value);
    this.emailEmitter.emit(this.f.planName.value);
    this.dateEmitter.emit(Date.now());

    console.log(this.planSelectionForm.value);
    this.planSelectionForm.reset();
  }

  validatePasswords(group: FormGroup): any {
    const password = group.controls.password.value;
    const passwordVerification = group.controls.passwordVerification.value;

    return password === passwordVerification ? null : { notSame: true };
  }

  get f(): { [key: string]: AbstractControl} {
    return this.planSelectionForm.controls;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  Contactform: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.Contactform = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.pattern('^[a-zA-Z]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      comments: ['', [Validators.minLength(30)]]
    });
  }


  onSubmit() {
    this.submitted = true;

    if (this.Contactform.invalid) {
      return;
    }

    alert('Form Submitted Successfully!');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegister } from './../../../interface/IRegistration';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  constructor() {
  }
  registerFormUsersList : IRegister[]  = [] ;
  countries$ = ["India","Srilanka","Australia","South Africa"];
  states$ = false;
  formSubmitted: boolean;
  removePhone = false;
  number = false;

  // Enableing the states form element after selecting the Country form element
  changeCountryForState(){
    this.states$ = true;
  }
  // Evaluating the form with formgroup and used the formcontrol for written the validators for form fields with Validatiors.
  registrationForm = new FormGroup({
    firstName: new FormControl
    ('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    lastName: new FormControl
    ('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    emailAddress: new FormControl
    ('', [Validators.required, Validators.email]),
    dob: new FormControl
    ('', [Validators.required]),
    phoneNumber:new FormArray([
      new FormControl('',[Validators.required,Validators.pattern("[0-9 ]{10}")])
    ],this.validateSize),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required,Validators.pattern("[0-9 ]{6}")]),
  });

  // Assigning the phonenumber to method as a Formarray for adding and removing the Input fields dynamically
  get phoneNumber(){
    return this.registrationForm.get('phoneNumber') as FormArray
  }

  // Adding the phonenumber input fields
  addPhoneArray(){
     this.phoneNumber.push(new FormControl('',[Validators.required,,Validators.pattern("[0-9 ]{10}")]))
     this.removePhone = true;
  }

  // Removing the phonenumber input fields on particular Index
  removePhoneArray(index){
    this.phoneNumber.removeAt(index)
  }

  // Assigning the formcontrols to method for the validation
  get f() { return this.registrationForm.controls; }


  // Written the validations for the form fields
  register(field) {
    return (
      this.registrationForm.get(field).errors && this.registrationForm.get(field).touched ||
      this.registrationForm.get(field).untouched &&
      this.formSubmitted && this.registrationForm.get(field).errors
    );
  }
  ngOnInit(): void {
  }

  // Submitting the form data if the form is valid and pushing the form data to the registerFormUsersList for creating usersList
  onRegistrationFormSubmit(){
    this.formSubmitted = true;
    if(this.registrationForm.valid){
    this.registerFormUsersList.push(this.registrationForm.value);
    }
    this.number = true
  }

  // Resetting the form data after the submissiona and the removing the formarray fields
  onRegisterFormReset(){
    this.formSubmitted = false;
    this.registrationForm.reset();
    this.removePhoneArray(this.phoneNumber.reset())
    this.removePhone = false
  }

  // Controlling the Phonenumber Formarray for input fields length should not be greater than 3
  validateSize(arr: FormArray) {
    return arr.length > 3 ? {
      invalidSize: true
    } : null;
  }
}


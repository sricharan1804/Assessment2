import { IRegister } from './../../../interface/IRegistration';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationusers',
  templateUrl: './registrationusers.component.html',
  styleUrls: ['./registrationusers.component.css']
})
export class RegistrationusersComponent implements OnInit {

  @Input()registerFormUsersList:IRegister[]=[]

  constructor() {}
  ngOnInit(): void {}

  // Deleting the particular table body datacolumn.
  onDelete(del){
    if(confirm('Are you sure to delete this record ?')) {
    this.registerFormUsersList.splice(del, 1)
    }
  }

  // To toggle the all checkboxes
  checkAllCheckBox(ev) {
		this.registerFormUsersList.forEach(x => x.checked = ev.target.checked)
	}

  // To check the individual
	isAllCheckBoxChecked() {
		return this.registerFormUsersList.every(p => p.checked);
	}

  // To delete the selected check Boxes
  delete(){
    const selectedUsers = this.registerFormUsersList.filter(register => register.checked).map(p => p.checked);
		console.log (selectedUsers);
		if(selectedUsers.length > 0) {
      if(confirm("Are you sure you want to delete the Registerusers data?")){
        setTimeout(() => {
          alert("Successfully Deleted")
          window.location.reload()
        }, 1000);
      }
		} else {
      alert("Select atleast one user to delete ?")
		}
  }

}


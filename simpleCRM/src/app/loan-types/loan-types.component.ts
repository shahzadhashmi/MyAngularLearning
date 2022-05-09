import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  addLoanTypesForm!: FormGroup;

  // Add form builder in the constructor
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    /*
    basic formGroup Example
    this.addLoanTypesForm = new FormGroup({
      'loanName': new FormControl(),
      'loanDescription': new FormControl()
    });
    */

  /*
  Now by using formBuilder, which provides us three things
  1: FormGroup
  2: FormArray
  3: FormControls
  */

    this.addLoanTypesForm = this.formBuilder.group({
      'loanName': new FormControl(),
      'loanType': new FormControl(),
      'loanDescription': new FormControl(),
    })
  }

  addLoanType(){
    console.log(this.addLoanTypesForm.value);
  }

}
 
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

    /* this.addLoanTypesForm = this.formBuilder.group({
       'loanName': new FormControl(),
       'loanType': new FormControl(),
       'loanDescription': new FormControl(),
     })
     */

    /*
    Now setting form values
    we have two ways to set values in formBuilder
    1: set the value of entire form in one go
    2: setting the form value using setValue method(by creating object)
     */

    /*
        Now setting form values
        we have two ways to set values in formBuilder
        1: set the value of entire form in one go
        2: setting the form value using setValue method(by creating object)
         */

    /*
    // Method 1:set the value of entire form in one go
    this.addLoanTypesForm = this.formBuilder.group({
      'loanName': new FormControl('Shahzad Loan'),
      'loanType': new FormControl('Bank Loan'),
      'loanDescription': new FormControl('Taking loan from bank for business'),
    });
    */

    /* 
    Method2: setting the form value using setValue method(by creating object)
    */

    this.addLoanTypesForm = this.formBuilder.group({
      'loanName': new FormControl(),
      'loanType': new FormControl(),
      'loanDescription': new FormControl(),
    }); 

    const newLoanObj = {
      'loanName': 'Shahzad Loan',
      'loanType': 'Personal Loan',
      'loanDescription': 'Taking Personal loan from bank for study',
    }

    this.addLoanTypesForm.setValue(newLoanObj);

  }

  addLoanType() {
    console.log(this.addLoanTypesForm.value);
  }

}

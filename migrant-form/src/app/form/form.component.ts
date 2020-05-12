import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{GroupDetailsComponent} from "../group-details/group-details.component";

import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formValues={};
  constructor(public dialog:MatDialog) { }

  gender = '';
  checked = '';
 // indeterminate = false;
  options=['Fever','Dry Cough','Tiredness','Loss of Smell/Taste','Headache','Breathing Issue']

  onSubmit(form:NgForm){
    if(form.invalid){
      return;
    }
    else{
      this.formValues=form.value;
      console.log('values:',this.formValues);
     form.resetForm();
    }
  }
  addGroup(formValues){
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.width = "100%";
   dialogConfig.data=formValues.value;
   this.dialog.open(GroupDetailsComponent, dialogConfig);
  }
  ngOnInit(): void {
  }

}

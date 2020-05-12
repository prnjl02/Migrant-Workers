import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MatDialog } from "@angular/material/dialog";

import { MatCheckbox } from "@angular/material/checkbox";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  finalData = [];
  formValues = {};
  constructor(public dialog: MatDialog) {}
  checkedArray = [];
  options = [
    "Fever",
    "Dry Cough",
    "Tiredness",
    "Loss of Smell/Taste",
    "Headache",
    "Breathing Issue",
  ];

  onPersonalDetails(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.finalData.push(form.value);
      form.resetForm();
    }
  }

  onSubmitProfessional(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.finalData.push(form.value);
      form.resetForm();
    }
  }

  onSubmitCovidQues(form: NgForm) {
    var uniqueArray = [...new Set(this.checkedArray)];
    this.finalData.push(uniqueArray);
    form.resetForm();
  }

  somethingClick(checkbox: MatCheckbox, item: { id: string }) {
    this.checkedArray.push(item);
  }

  onSubmitImmediateHelp(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.finalData.push(form.value);
      console.log("final data is :", this.finalData);
      form.resetForm();
    }
  }

  ngOnInit(): void {}
}

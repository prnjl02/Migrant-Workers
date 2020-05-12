import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Inject } from '@angular/core';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  tableShow=true;
 tableData =[];
  constructor(  @Inject(MAT_DIALOG_DATA) public formValues: any) { }

  ngOnInit(): void {
    this.tableData.push(this.formValues);
  }

  onSubmit(migrationForm){
   this.tableData.push(migrationForm.value);
   console.log('all data is :',this.tableData)
   this.dataSource = [...this.tableData];
   migrationForm.resetForm();


}
  displayedColumns: string[] = ['fname', 'lname', 'gender','age','travellingfrom','date','travellingto','aadharnumber'];
  dataSource = this.tableData;


}

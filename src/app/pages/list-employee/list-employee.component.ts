import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  employee : Employee[] = [
    new Employee('username')
  ];

  selected = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){}
  onEdit(){}
  onDelete(){}

}

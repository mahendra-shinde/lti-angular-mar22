import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-list',
  template: `
    <table [ngClass]="empList.length > 5 ? 'highlight' : 'lowlight' ">
      <thead>
      <tr>
      <td>Employee ID</td>
      <td>First Name</td>
      <td>Last Name</td>
      </tr>
      </thead>
      <tbody *ngFor="let e of empList" >
        <tr>
        <td>{{ e.empId }}  </td>
        <td>{{ e.firstName }}  </td>
        <td>{{ e.lastName }}  </td>
        </tr>
      </tbody>
    </table>
    <br/><br/>
    <select name="mon"  >
      <option *ngFor="let m of months" value="{{m}}">{{m | uppercase }}</option>
    </select>
    <ul [ngSwitch]="currentMonth" >
      <li *ngSwitchCase="1">January</li>
      <li *ngSwitchCase="2">February</li>
      <li *ngSwitchCase="3">March</li>
    </ul>

    <input [ngStyle]="{padding: '5px', border: '2px dotted black'}" type="button" value="Change Month" (click)="updateMonth()" />
    `,
  styles: [

  ]
})
export class EmpListComponent implements OnInit {

  empList: Employee[] = [];
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor() { }

  ngOnInit(): void {
    this.empList.push({ "empId": 101, "firstName": "Mahendra", "lastName": "Shinde" });
    this.empList.push({ "empId": 102, "firstName": "Dharmendra", "lastName": "Deol" });
    this.empList.push({ "empId": 103, "firstName": "Jeetendra", "lastName": "Kapoor" });


  }

  currentMonth: number = 3;

  updateMonth() {
    if (this.currentMonth > 3) {
      this.currentMonth = 1;
      return;
    }
    this.currentMonth++;
  }
}
export interface Employee {
  empId: number;
  firstName: string;
  lastName: string;
}

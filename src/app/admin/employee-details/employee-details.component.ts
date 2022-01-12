import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/entities/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  disabled = false;
  employees: Employee[] = [];

  displayedColumns = ['employeeId', 'firstName', 'lastName','mobileNO', 'email','specialisation', 'roleType','status', 'action'];
  dataSource = new MatTableDataSource<Employee>();
  id!:number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() queryID =0;
  isAdmin:boolean = false;
  constructor(private router: Router,private route: ActivatedRoute, private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployeeList().subscribe(employees =>{
      this.employees = employees;
      this.dataSource.data = this.employees;
      console.log("Data source : " , this.dataSource.data);
      
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log("filter value", filterValue);
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // deleteEmployee(employeeId:number) {
  //   console.log(employeeId);
  //   if(confirm("Are you sure!")) {
  //     this.employeeService.deleteEmployeeById(employeeId).subscribe();
  //     window.location.reload();
  //   }
  // }
}
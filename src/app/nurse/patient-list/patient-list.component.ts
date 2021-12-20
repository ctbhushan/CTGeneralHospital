import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

export interface PatientData {
  patientId: number;
  firstName: string;
  lastName:string;
  contactNo: string;
  email:string;
}

const ELEMENT_DATA: PatientData[] = [
  {patientId: 1, firstName: 'Ashwini', lastName: 'Mishra', contactNo: '9812345678',email:'ashwini@gmail.com'},
  {patientId: 2, firstName: 'Milind', lastName: 'Patil', contactNo: '9712345687',email:'milind@gmail.com'},
  {patientId: 3, firstName: 'Bhushan', lastName: 'Gupta', contactNo: '961234546798',email:'bhushan@gmail.com'},
  {patientId: 4, firstName: 'Parag', lastName: 'Gaikwad', contactNo: '961234546798',email:'parag@gmail.com'},
  {patientId: 5, firstName: 'Mansi', lastName: 'Chaudhary', contactNo: '961234546797',email:'mansi@gmail.com'},
  {patientId: 6, firstName: 'Priyanka', lastName: 'Gaykhe', contactNo: '961234546796',email:'priyanka@gmail.comamol@gmail.com'},
  {patientId: 7, firstName: 'Amol', lastName: 'Baykar', contactNo: '761234546798',email:'Cardiologist'},
  {patientId: 8, firstName: 'Vivek', lastName: 'Gupta', contactNo: '771234546798',email:'vivek@gmail.com'},
  {patientId: 9, firstName: 'Simran', lastName: 'Mishra', contactNo: '961234546756',email:'simran@gmail.com'},
  {patientId: 10, firstName: 'Aman', lastName: 'Goenka', contactNo: '961234546745',email:'aman@gmail.com'},
];

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  displayedColumns: string[] = ['patientId', 'firstName', 'lastName', 'contactNo','email','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRecord(row:any){
    console.log("Row Id " + row.patientId);
    
  // this.queryID= row.id;
    
    // this.router.navigate(['/nurse/employee-details/{{this.queryID}}'])
    
  }

}

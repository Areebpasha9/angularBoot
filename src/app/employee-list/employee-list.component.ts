import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
employees: Employee[];

constructor(private employeeService: EmployeeService ,
  private router:Router,
  private toastr:ToastrService  ){}

  ngOnInit():void{
this.getEmployees(); 
}
//data:any;
private getEmployees(){
  
  this.employeeService.getEmployeesList().subscribe((data) => {
    console.log(data);
    this.employees = data;
  });
}
updateEmployee(id:number){
this.router.navigate(['update-employees',id]);
}
deleteEmployee(id:number){
this.employeeService.deleteEmployee(id).subscribe(data =>
  {
    console.log(data);
    this.getEmployees();
this.toastr.success("Deleted Successfully!")
  })
}

}

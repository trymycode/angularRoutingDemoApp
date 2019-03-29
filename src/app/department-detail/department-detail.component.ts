import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You have selected the department with id = {{departmentId}}</h3>
    
    <button class="btn btn-info btn-sm" (click)="goPrevious()"        style="margin:1rem">Previous</button>
    <button class="btn btn-info btn-sm" (click)="goNext()">Next</button>

    <h4 style="margin: 1rem auto; color: #414141;">DEPARTMENT {{departmentId}}</h4>
    <div style="width:50%;border:2px solid grey;padding: 20px;border-radius: 10px;margin-bottom: 2rem;">
    
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div class="childRoute">
    <p><button class="btn btn-default" (click)="showOverview()">Overview</button>
       <button class="btn btn-default" (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    </div>
    </div>
    <div>
    <button class="btn btn-danger" (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  '.childRoute{width: 100%; font-size: 20px;}',
  'button {margin-right: 2rem;}']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  
  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments',{id: selectedId}]);
    this.router.navigate(['../',{id: selectedId}],{relativeTo:this.route});
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
    
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});
  }
}

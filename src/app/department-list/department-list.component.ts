import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>Departments List</h3>
    <ul>
    <p *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
    <span class="batch">{{department.id}}</span>{{department.name}}
    </p>
    </ul>
     `,
  styles: ['h3{margin-bottom: 2rem}','.batch { color: #FBEAFF;font-weight: 400;font-size: 18px;padding: 6px 10px; background-color: #4B4453;margin-right: 5px;border-radius: 5px;}',
  'p{background-color: #FEFEDF; padding: 5px;border-radius: 10px;width: 300px;border: 2px solid grey}',
  'p:hover{background-color:#845EC2;}',
'.batch:hover{color:#1d1d1d;background-color:#c0c0c0}',
'.selected{color: #FEFEDF;background-color: #B0A8B9;}']
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "AngularJS"},
    {"id": 3, "name": "NodeJS"},
    {"id": 4, "name": "MongoDB"},
    {"id": 5, "name": "Bootstrap"}
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(department){
    // this.router.navigate(['/department-lists',department.id]);
    // **we are using relative routing**
    this.router.navigate([department.id],{relativeTo:this.route});
  }
  isSelected(department){
    return department.id === this.selectedId;
  }
}

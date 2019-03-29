import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-overview',
  template: `
    <p>
      <b>department-overview</b> works!It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
    </p>
  `,
  styles: ['p{font-size: 16px;width: 100%;}']
})
export class DepartmentOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

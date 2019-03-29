import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="jumbotron">
  <h1 style="padding-left:20px;">PAGE NOT FOUND!!<br>
  <span class="glyphicon glyphicon-thumbs-down"></span></h1>

  
</div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

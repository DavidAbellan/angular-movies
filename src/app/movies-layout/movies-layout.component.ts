import { Component, OnInit, Input } from '@angular/core';
 

@Component({
  selector: 'app-movies-layout',
  templateUrl: './movies-layout.component.html',
  styleUrls: ['./movies-layout.component.scss']
})
export class MoviesLayoutComponent implements OnInit {
  @Input() data : any;
  constructor() { 
  }

  ngOnInit() {
  }
}

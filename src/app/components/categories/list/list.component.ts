import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor() { }

  categoriesList:any=[];
  
  ngOnInit(): void {
  }

}

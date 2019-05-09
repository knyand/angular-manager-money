import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/model/category.model';

@Component({
  selector: 'hm-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddCategory(category: Category) {
    console.log(category);
  }
}

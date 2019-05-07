import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../shared/category.service';
import {Category} from '../../../shared/model/category.model';

@Component({
  selector: 'hm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      limit: ['', Validators.required]
    });
  }

  onSubmit() {
    this.categoryService.save(this.categoryForm.value).subscribe();
  }
}

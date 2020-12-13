import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/_model/category.model';
import { CategoryService } from 'src/app/components/_service/category/category.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-button-addcategory',
  templateUrl: '../../button.component.html',
})

export class AddCategoryComponent {
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(AddCategory, {
      width: '20%'
    });
  }
}

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addCategories.component.html',
  styleUrls: ['./addCategories.component.scss']
})
export class AddCategory implements OnInit {
  category: Category;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = this.categoryService.newCategory();
  }

  newCategory(): void {
    this.categoryService.addCategory(this.category);
    this.category = this.categoryService.newCategory();
  }
}

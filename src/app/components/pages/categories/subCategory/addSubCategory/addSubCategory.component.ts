import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { subCategory } from 'src/app/components/_model/subCategory.model';
import { SubCategoryService } from 'src/app/components/_service/category/subCategory.service'
import { CategoryService } from 'src/app/components/_service/category/category.service'
import { Category } from 'src/app/components/_model/category.model';


@Component({
  selector: 'app-button-addsubcategory',
  templateUrl: '../../../button.component.html'
})
export class AddSubCategoriesComponent {
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(AddsubCategory, {
      width: '20%'
    });
  }
}

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addSubCategory.component.html',
  styleUrls: ['./addSubCategory.component.scss']
})
export class AddsubCategory implements OnInit {
  subcategory: subCategory;
  category: Category[];

  constructor(private subcategorieService: SubCategoryService, private CategorieService: CategoryService) {}

  ngOnInit() {
    this.subcategory = this.subcategorieService.newsubCategory();
    //this.category = this.CategorieService.getAll();
  }

  newsubCategory(): void {
    this.subcategorieService.addsubCategoy(this.subcategory);
    this.subcategory = this.subcategorieService.newsubCategory();
  }
}

import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { subCategory } from 'src/app/components/_model/subCategory.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SubCategoryService } from 'src/app/components/_service/category/subCategory.service';

@Component({
  selector: 'app-viewsubcategories',
  templateUrl: './viewSubCategories.component.html',
  styleUrls: ['./viewSubCategories.component.scss']
})
export class ViewSubCategoriesComponent implements OnInit, AfterViewInit {
  dataSource: subCategory[];

  displayedColumns: string[] = ['check', 'id', 'name'];

  dataSources = new MatTableDataSource<subCategory>(this.subcategorieService.getsubCategory());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }

  constructor(private subcategorieService: SubCategoryService) { }

  ngOnInit() {
    this.dataSources.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator;
  }


}

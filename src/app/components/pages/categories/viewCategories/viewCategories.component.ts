import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/components/_model/category.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/components/_service/category/category.service';

@Component({
  selector: '    ',
  templateUrl: './viewCategories.component.html',
  styleUrls: ['./viewCategories.component.scss']
})
export class ViewCategoriesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['check','id','name'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private categorieService: CategoryService) { }

  ngOnInit() {
    this.categorieService.changeCategory.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.categorieService.getAll().subscribe(data =>{
        this.dataSource = new MatTableDataSource(data);
    });
  }

  public refrescar() {
    this.categorieService.getAll().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
  });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

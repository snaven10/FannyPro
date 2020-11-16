import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { categorie } from 'src/app/components/_model/categorie.model';
import { CategorieService } from 'src/app/components/_service/categorie/categorie.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-viewcategorie',
  templateUrl: './viewcategorie.component.html',
  styleUrls: ['./viewcategorie.component.scss']
})
export class ViewcategorieComponent implements AfterViewInit {
  dataSource: categorie[];

  displayedColumns: string[] = ['id','name'];

  dataSources = new MatTableDataSource<categorie>(this.CategorieService.getCategorie());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }
  constructor(private CategorieService: CategorieService) { }

  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator;
  }

}

import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { subcategorie } from 'src/app/components/_model/sub.categorie.model';
import { MatTableDataSource } from '@angular/material/table';
import { SubcategorieService } from 'src/app/components/_service/subcategorie/subcategorie.service'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-viewsubcategorie',
  templateUrl: './viewsubcategorie.component.html',
  styleUrls: ['./viewsubcategorie.component.scss']
})
export class ViewsubcategorieComponent implements OnInit, AfterViewInit {
  dataSource: subcategorie[];

  displayedColumns: string[] = ['check', 'id', 'name'];

  dataSources = new MatTableDataSource<subcategorie>(this.SubcategorieService.getsubCategory());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }

  constructor(private SubcategorieService: SubcategorieService) { }

  ngOnInit() {
    this.dataSources.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator;
  }
  

}

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { categorie } from 'src/app/components/_model/categorie.model';
import { CategorieService } from 'src/app/components/_service/categorie/categorie.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-viewcategorie',
  templateUrl: './viewcategorie.component.html',
  styleUrls: ['./viewcategorie.component.scss']
})
export class ViewcategorieComponent implements OnInit, AfterViewInit {
  dataSource: categorie[];

  displayedColumns: string[] = ['select','id','name'];

  dataSources = new MatTableDataSource<categorie>(this.CategorieService.getCategorie());
  selection = new SelectionModel<categorie>(true,[]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /** Si el número de elementos seleccionados coincide con el número total de filas. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSources.data.length;
    return numSelected === numRows;
  }

  /** Selecciona todas las filas si no están todas seleccionadas; de lo contrario, selección clara. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSources.data.forEach(row => this.selection.select(row));
  }

  /** La etiqueta de la casilla de verificación en la fila pasada */
  checkboxLabel(row?: categorie): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.id + 1}`;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }
  constructor(private CategorieService: CategorieService) { }

  ngOnInit() {
    this.dataSource = this.CategorieService.getCategorie();
  }

  public refrescar() {
    this.dataSource = this.CategorieService.getCategorie();
  }

  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator;
  }

}

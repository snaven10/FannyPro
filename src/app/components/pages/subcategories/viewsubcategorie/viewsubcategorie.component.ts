import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { subcategorie } from 'src/app/components/_model/sub.categorie.model';
import { MatTableDataSource } from '@angular/material/table';
import { SubcategorieService } from 'src/app/components/_service/subcategorie/subcategorie.service'
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-viewsubcategorie',
  templateUrl: './viewsubcategorie.component.html',
  styleUrls: ['./viewsubcategorie.component.scss']
})
export class ViewsubcategorieComponent implements OnInit, AfterViewInit {
  dataSource: subcategorie[];

  displayedColumns: string[] = ['select', 'id', 'name'];

  dataSources = new MatTableDataSource<subcategorie>(this.SubcategorieService.getsubCategory());
  selection = new SelectionModel<subcategorie>(true,[]);

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
  checkboxLabel(row?: subcategorie): string {
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

  constructor(private SubcategorieService: SubcategorieService) { }

  ngOnInit() {
    this.dataSources.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator;
  }
  

}

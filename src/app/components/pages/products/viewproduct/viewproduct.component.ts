import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { product } from './../../../_model/product.model';
import { ProductService } from './../../../_service/product/product.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit, AfterViewInit {
  dataSource: product[];
  displayedColumns: string[] = ['select','id','name','manofacture','count','location','description'];
  dataSources = new MatTableDataSource<product>(this.ProductService.getproduct());
  selection = new SelectionModel<product>(true,[]);

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
  checkboxLabel(row?: product): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.id + 1}`;
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLocaleLowerCase();
  }

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.dataSource = this.ProductService.getproduct();
  }

  ngAfterViewInit(){
    this.dataSources.paginator = this.paginator;
  }

}

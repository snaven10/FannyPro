import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from './../../../_model/product.model';
import { ProductService } from './../../../_service/product/product.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit, AfterViewInit {
  dataSource: Product[];
  displayedColumns: string[] = ['check','id','name','manofacture','count','location','description'];
  dataSources = new MatTableDataSource<Product>(this.ProductService.getproduct());
  @ViewChild(MatPaginator) paginator: MatPaginator;

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

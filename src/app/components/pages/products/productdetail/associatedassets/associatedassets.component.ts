import { ProductService } from 'src/app/components/_service/product/product.service';
import { Component, OnInit } from '@angular/core';
import { asset } from 'src/app/components/_model/product.model';

@Component({
  selector: 'app-asset',
  templateUrl: './associatedassets.component.html',
  styleUrls: ['./associatedassets.component.scss']
})
export class AssociatedassetsComponent implements OnInit {
  dataSource: asset[];
  displayedColumns: string[] = ['displayname','userby','department'];

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.dataSource = this.ProductService.getasset();
  }

}

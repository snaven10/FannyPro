import { ProductService } from 'src/app/components/_service/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/components/_model/asset.model';

@Component({
  selector: 'app-asset',
  templateUrl: './associatedassets.component.html',
  styleUrls: ['./associatedassets.component.scss']
})
export class AssociatedassetsComponent implements OnInit {
  dataSource: Asset[];
  displayedColumns: string[] = ['displayname','userby','department'];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.dataSource = this.ProductService.getasset();
  }

}

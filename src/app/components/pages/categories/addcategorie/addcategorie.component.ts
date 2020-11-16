import { Component, OnInit } from '@angular/core';
import { categorie } from 'src/app/components/_model/categorie.model';
import { CategorieService } from 'src/app/components/_service/categorie/categorie.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.scss']
})
export class AddcategorieComponent implements OnInit {

  categorie: categorie;
  constructor(private CategorieService: CategorieService) { }

  ngOnInit() {
    this.categorie = this.CategorieService.newcategorie();
  }

  newcategorie(): void {
    this.CategorieService.addcategorie(this.categorie)
    this.categorie = this.CategorieService.newcategorie();
  }

}

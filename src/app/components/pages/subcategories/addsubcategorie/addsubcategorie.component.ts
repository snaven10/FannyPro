import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { subcategorie } from 'src/app/components/_model/sub.categorie.model';
import { SubcategorieService } from 'src/app/components/_service/subcategorie/subcategorie.service'
import { CategorieService } from 'src/app/components/_service/categorie/categorie.service'
import { categorie } from 'src/app/components/_model/categorie.model';


@Component({
  selector: 'app-button-addsubcategorie',
  templateUrl: '../../button.component.html'
})
export class AddsubcategorieComponent {
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(AddsubCategory, {
      width: '20%'
    });
  }
}

@Component({
  selector: 'app-addsubcategorie',
  templateUrl: './addsubcategorie.component.html',
  styleUrls: ['./addsubcategorie.component.scss']
})
export class AddsubCategory implements OnInit {
  subcategorie: subcategorie;
  categorie: categorie[];

  constructor(private SubcategorieService: SubcategorieService, private CategorieService: CategorieService) {}
  
  ngOnInit() {
    this.subcategorie = this.SubcategorieService.newsubCategory();
    this.categorie = this.CategorieService.getCategorie();
  }

  newsubCategory(): void {
    this.SubcategorieService.addsubCategoy(this.subcategorie);
    this.subcategorie = this.SubcategorieService.newsubCategory();
  }
}

import { Component, OnInit } from '@angular/core';
import { categorie } from 'src/app/components/_model/categorie.model';
import { CategorieService } from 'src/app/components/_service/categorie/categorie.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewcategorieComponent } from 'src/app/components/pages/categories/viewcategorie/viewcategorie.component'
  
@Component({
  selector: 'app-button-addcategorie',
  templateUrl: '../../button.component.html',
})
  
export class AddcategorieComponent {
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(AddCategorie, {
      width: '20%'
    });
  }
}

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.scss']
})
export class AddCategorie implements OnInit {
  categorie: categorie;
  constructor(private CategorieService: CategorieService) { }

  ngOnInit() {
    this.categorie = this.CategorieService.newcategorie();
  }

  newcategorie(): void {
    this.CategorieService.addcategorie(this.categorie);
    this.categorie = this.CategorieService.newcategorie();
  }
}

import { Injectable } from '@angular/core';
import { categorie } from '../../_model/categorie.model';
/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class CategorieService {
  
  private categorie: categorie[];
  constructor() { 
    this.categorie = [{
      "id": 1,
      "name": "330"
    }, {
        "id": 2,
        "name": "911"
      }, {
        "id": 3,
        "name": "Legacy"
      }, {
        "id": 4,
        "name": "Magnum"
      }, {
        "id": 5,
        "name": "Montero Sport"
      }, {
        "id": 6,
        "name": "Elan"
      }, {
        "id": 7,
        "name": "Savana 3500"
      }, {
        "id": 8,
        "name": "Corvette"
      }, {
        "id": 9,
        "name": "2500"
      }];
  }

  getCategorie() {
    return this.categorie;
  }

  addcategorie(categorie: categorie) {
    this.categorie.push(categorie);
  }

  newcategorie(): categorie {
    return {
      id: this.categorie.length,
      name: ''
    };
  }
}

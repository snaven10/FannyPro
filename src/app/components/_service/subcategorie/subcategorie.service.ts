import { Injectable } from '@angular/core';
import { subcategorie } from '../../_model/sub.categorie.model';
/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class SubcategorieService {
  private subcategorie: subcategorie[];
  constructor() { 
    this.subcategorie = [{
      "id": 1,
      "subCategory": 8,
      "name": "Stringtough"
    }, {
      "id": 2,
      "subCategory": 5,
      "name": "Veribet"
    }, {
      "id": 3,
      "subCategory": 2,
      "name": "Viva"
    }, {
      "id": 4,
      "subCategory": 1,
      "name": "Trippledex"
    }, {
      "id": 5,
      "subCategory": 1,
      "name": "Tres-Zap"
    }, {
      "id": 6,
      "subCategory": 3,
      "name": "Tres-Zap"
    }, {
      "id": 7,
      "subCategory": 8,
      "name": "Fixflex"
    }, {
      "id": 8,
      "subCategory": 6,
      "name": "Ventosanzap"
    }, {
      "id": 9,
      "subCategory": 9,
      "name": "Sonsing"
    }, {
      "id": 10,
      "subCategory": 1,
      "name": "Cookley"
    }, {
      "id": 11,
      "subCategory": 5,
      "name": "Temp"
    }, {
      "id": 12,
      "subCategory": 9,
      "name": "Flexidy"
    }, {
      "id": 13,
      "subCategory": 4,
      "name": "Solarbreeze"
    }, {
      "id": 14,
      "subCategory": 9,
      "name": "Otcom"
    }, {
      "id": 15,
      "subCategory": 5,
      "name": "Latlux"
    }];
  }

  getsubCategory() {
    return this.subcategorie;
  }

  addsubCategoy(subcategorie: subcategorie) {
    this.subcategorie.push(subcategorie)
  }
  
  newsubCategory(): subcategorie {
    return {
      id: this.subcategorie.length,
      subCategory: 0,
      name: ''
    };
  }
}

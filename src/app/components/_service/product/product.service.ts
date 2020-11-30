import { product, vendors } from './../../_model/product.model';
import { Injectable } from '@angular/core';
/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class ProductService {

  private product: product[];
  private vendors: vendors[];

  constructor() {
    this.product = [
      {
        "id": 1,
        "category_id": 10,
        "name": "Arthurs",
        "manofacture": "AZN",
        "count": "344807355-5",
        "location": null,
        "description": "Tutor Perini Corporation"
      }, {
        "id": 2,
        "category_id": 13,
        "name": "Kings",
        "manofacture": "MKD",
        "count": "190260186-6",
        "location": "1239",
        "description": "Rogers Communication, Inc."
      }, {
        "id": 3,
        "category_id": 13,
        "name": "Fishburn",
        "manofacture": "EGP",
        "count": "584927230-5",
        "location": null,
        "description": "PB Bancorp, Inc."
      }, {
        "id": 4,
        "category_id": 7,
        "name": "Jovasevic",
        "manofacture": "IDR",
        "count": "332918221-0",
        "location": null,
        "description": "Bellatrix Exploration Ltd"
      }, {
        "id": 5,
        "category_id": 12,
        "name": "Siddon",
        "manofacture": "PHP",
        "count": "145429173-7",
        "location": "3015",
        "description": "SCYNEXIS, Inc."
      }, {
        "id": 6,
        "category_id": 2,
        "name": "Sandham",
        "manofacture": "THB",
        "count": "477221379-1",
        "location": "47110",
        "description": "Centene Corporation"
      }, {
        "id": 7,
        "category_id": 13,
        "name": "Cripps",
        "manofacture": "RUB",
        "count": "735461071-2",
        "location": "175310",
        "description": "Hilton Worldwide Holdings Inc."
      }, {
        "id": 8,
        "category_id": 3,
        "name": "Giovannini",
        "manofacture": "PHP",
        "count": "847863173-9",
        "location": "2333",
        "description": "Arbutus Biopharma Corporation"
      }, {
        "id": 9,
        "category_id": 15,
        "name": "Fero",
        "manofacture": "EUR",
        "count": "563667314-0",
        "location": null,
        "description": "Double Eagle Acquisition Corp."
      }, {
        "id": 10,
        "category_id": 11,
        "name": "McVitie",
        "manofacture": "CNY",
        "count": "849341979-6",
        "location": null,
        "description": "Jason Industries, Inc."
      }, {
        "id": 11,
        "category_id": 4,
        "name": "Connett",
        "manofacture": "PLN",
        "count": "375016496-7",
        "location": "41-717",
        "description": "EPAM Systems, Inc."
      }, {
        "id": 12,
        "category_id": 3,
        "name": "McKinless",
        "manofacture": "KZT",
        "count": "324024682-1",
        "location": null,
        "description": "Colony NorthStar, Inc."
      }, {
        "id": 13,
        "category_id": 5,
        "name": "Troy",
        "manofacture": "UAH",
        "count": "332546217-0",
        "location": null,
        "description": "Entergy Louisiana, Inc."
      }, {
        "id": 14,
        "category_id": 4,
        "name": "Huglin",
        "manofacture": "RUB",
        "count": "415975390-6",
        "location": "618146",
        "description": "Zions Bancorporation"
      }, {
        "id": 15,
        "category_id": 12,
        "name": "Coope",
        "manofacture": "PHP",
        "count": "232380841-9",
        "location": "3132",
        "description": "Accuray Incorporated"
      }, {
        "id": 16,
        "category_id": 14,
        "name": "Hambrick",
        "manofacture": "NOK",
        "count": "393440476-6",
        "location": "4695",
        "description": "Goldman Sachs Group, Inc. (The)"
      }, {
        "id": 17,
        "category_id": 7,
        "name": "Milkeham",
        "manofacture": "RUB",
        "count": "766169908-7",
        "location": "399088",
        "description": "Alliance Data Systems Corporation"
      }, {
        "id": 18,
        "category_id": 1,
        "name": "Kunc",
        "manofacture": "MYR",
        "count": "902191578-2",
        "location": "50653",
        "description": "FB Financial Corporation"
      }, {
        "id": 19,
        "category_id": 3,
        "name": "Caps",
        "manofacture": "SEK",
        "count": "969596131-2",
        "location": "135 34",
        "description": "Nordic American Offshore Ltd"
      }, {
        "id": 20,
        "category_id": 6,
        "name": "Greetland",
        "manofacture": "CZK",
        "count": "832482794-3",
        "location": "276 01",
        "description": "Blackrock Enhanced Government Fund, Inc"
      }, {
        "id": 21,
        "category_id": 1,
        "name": "Bugdell",
        "manofacture": "JPY",
        "count": "332411898-0",
        "location": "927-2162",
        "description": "Morgan Stanley"
      }, {
        "id": 22,
        "category_id": 7,
        "name": "Babe",
        "manofacture": "RUB",
        "count": "901999328-3",
        "location": "431373",
        "description": "Laredo Petroleum, Inc."
      }, {
        "id": 23,
        "category_id": 14,
        "name": "Haughian",
        "manofacture": "JPY",
        "count": "677049526-0",
        "location": "868-0825",
        "description": "Akoustis Technologies, Inc."
      }, {
        "id": 24,
        "category_id": 13,
        "name": "Fitchew",
        "manofacture": "CNY",
        "count": "171258819-2",
        "location": null,
        "description": "RF Industries, Ltd."
      }, {
        "id": 25,
        "category_id": 2,
        "name": "Tomkies",
        "manofacture": "CNY",
        "count": "851790663-2",
        "location": null,
        "description": "RELX N.V."
      }, {
        "id": 26,
        "category_id": 12,
        "name": "Otson",
        "manofacture": "IDR",
        "count": "916733977-8",
        "location": null,
        "description": "Ruby Tuesday, Inc."
      }, {
        "id": 27,
        "category_id": 12,
        "name": "Ettery",
        "manofacture": "CNY",
        "count": "352702453-0",
        "location": null,
        "description": "Aegon NV"
      }, {
        "id": 28,
        "category_id": 9,
        "name": "Dudek",
        "manofacture": "RUB",
        "count": "303139639-1",
        "location": "102192",
        "description": "Fidelity National Financial, Inc."
      }, {
        "id": 29,
        "category_id": 4,
        "name": "Bowbrick",
        "manofacture": "RUB",
        "count": "273486911-X",
        "location": "663800",
        "description": "Kinder Morgan, Inc."
      }, {
        "id": 30,
        "category_id": 2,
        "name": "Wannan",
        "manofacture": "IDR",
        "count": "423024192-5",
        "location": null,
        "description": "Southwestern Energy Company"
      }, {
        "id": 31,
        "category_id": 2,
        "name": "Birdwhistle",
        "manofacture": "SEK",
        "count": "595745990-9",
        "location": "581 15",
        "description": "Universal Display Corporation"
      }, {
        "id": 32,
        "category_id": 12,
        "name": "Yannoni",
        "manofacture": "CNY",
        "count": "790576697-7",
        "location": null,
        "description": "Tempur Sealy International, Inc."
      }, {
        "id": 33,
        "category_id": 4,
        "name": "Barriball",
        "manofacture": "EUR",
        "count": "005375261-9",
        "location": "91265 CEDEX",
        "description": "MGC Diagnostics Corporation"
      }, {
        "id": 34,
        "category_id": 7,
        "name": "Hickin",
        "manofacture": "VND",
        "count": "344635898-6",
        "location": null,
        "description": "Dover Downs Gaming & Entertainment Inc"
      }, {
        "id": 35,
        "category_id": 13,
        "name": "Dermott",
        "manofacture": "CNY",
        "count": "674888522-1",
        "location": null,
        "description": "News Corporation"
      }, {
        "id": 36,
        "category_id": 6,
        "name": "Jelly",
        "manofacture": "CZK",
        "count": "096565959-3",
        "location": "679 63",
        "description": "SS&C Technologies Holdings, Inc."
      }, {
        "id": 37,
        "category_id": 6,
        "name": "Luckes",
        "manofacture": "CNY",
        "count": "977133966-4",
        "location": null,
        "description": "Andina Acquisition Corp. II"
      }, {
        "id": 38,
        "category_id": 11,
        "name": "Yewdell",
        "manofacture": "CNY",
        "count": "767351425-7",
        "location": null,
        "description": "LyondellBasell Industries NV"
      }, {
        "id": 39,
        "category_id": 14,
        "name": "Sayre",
        "manofacture": "PYG",
        "count": "043458635-8",
        "location": null,
        "description": "Pretium Resources, Inc."
      }, {
        "id": 40,
        "category_id": 1,
        "name": "Yakubov",
        "manofacture": "CLP",
        "count": "546769807-9",
        "location": null,
        "description": "Wintrust Financial Corporation"
      }, {
        "id": 41,
        "category_id": 7,
        "name": "Egle",
        "manofacture": "NGN",
        "count": "180134669-0",
        "location": null,
        "description": "Bed Bath & Beyond Inc."
      }, {
        "id": 42,
        "category_id": 10,
        "name": "Outerbridge",
        "manofacture": "MNT",
        "count": "771087138-0",
        "location": null,
        "description": "Embotelladora Andina S.A."
      }, {
        "id": 43,
        "category_id": 15,
        "name": "Quarton",
        "manofacture": "HTG",
        "count": "630998939-1",
        "location": null,
        "description": "Nuveen Core Equity Alpha Fund"
      }, {
        "id": 44,
        "category_id": 11,
        "name": "Enticott",
        "manofacture": "CNY",
        "count": "416372889-9",
        "location": null,
        "description": "Cinemark Holdings Inc"
      }, {
        "id": 45,
        "category_id": 14,
        "name": "Frail",
        "manofacture": "SYP",
        "count": "661271913-3",
        "location": null,
        "description": "PowerShares S&P SmallCap Consumer Staples Portfolio"
      }, {
        "id": 46,
        "category_id": 15,
        "name": "Stronge",
        "manofacture": "NOK",
        "count": "561973551-6",
        "location": "3255",
        "description": "Harmony Merger Corp."
      }, {
        "id": 47,
        "category_id": 4,
        "name": "Bromont",
        "manofacture": "JPY",
        "count": "575701542-X",
        "location": "679-4324",
        "description": "AllianzGI Convertible & Income Fund II"
      }, {
        "id": 48,
        "category_id": 4,
        "name": "Birk",
        "manofacture": "PHP",
        "count": "244790999-3",
        "location": "6540",
        "description": "China Unicom (Hong Kong) Ltd"
      }, {
        "id": 49,
        "category_id": 15,
        "name": "Kuhle",
        "manofacture": "EUR",
        "count": "839797005-3",
        "location": "52551",
        "description": "Chimera Investment Corporation"
      }, {
        "id": 50,
        "category_id": 3,
        "name": "Gallandre",
        "manofacture": "IDR",
        "count": "746258136-1",
        "location": null,
        "description": "ENDRA Life Sciences Inc."
      }
    ];
    this.vendors = [
      {id: 1, vendorname: 'Logitech', price: 19.99, warrantyvalidity: '-', quantity: 1}
    ];
   }

   getproduct(){
     return this.product;
   }

   getvendors(){
    return this.vendors;
   }

   addproduct(product: product){
     this.product.push(product);
   }

   addvendors(vendors: vendors){
    this.vendors.push(vendors);
  }

   newproduct(): product {
     return {
       id: this.product.length,
       category_id: 0,
       name: '',
       manofacture: '',
       count: '',
       location: '',
       description: ''
     }
   }
   newvendor(): vendors {
    return {
       id: this.vendors.length,
       vendorname: '',
      price: 0,
      warrantyvalidity: '',
      quantity: 0
    }
  }
}

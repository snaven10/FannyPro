import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ProductsItem {
  name: string;
  assettype: string;
  location: string;
  userby: string;
  departament: string;
  managerby: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ProductsItem[] = [
  {
    "name": "Glider, feathertail",
    "assettype": "Golf",
    "location": "NC",
    "userby": "United States",
    "departament": "Shoes",
    "managerby": "Profound"
  }, {
    "name": "Nine-banded armadillo",
    "assettype": "Expedition",
    "location": "OH",
    "userby": "United States",
    "departament": "Toys",
    "managerby": "actuating"
  }, {
    "name": "Lion, african",
    "assettype": "Odyssey",
    "location": "AR",
    "userby": "United States",
    "departament": "Toys",
    "managerby": "Configurable"
  }, {
    "name": "Bulbul, black-eyed",
    "assettype": "V50",
    "location": "CA",
    "userby": "United States",
    "departament": "Clothing",
    "managerby": "paradigm"
  }, {
    "name": "Antelope, roan",
    "assettype": "Camaro",
    "location": "TX",
    "userby": "United States",
    "departament": "Garden",
    "managerby": "client-driven"
  }, {
    "name": "Eastern quoll",
    "assettype": "Reno",
    "location": "KY",
    "userby": "United States",
    "departament": "Baby",
    "managerby": "holistic"
  }, {
    "name": "Long-nosed bandicoot",
    "assettype": "LeSabre",
    "location": "NM",
    "userby": "United States",
    "departament": "Electronics",
    "managerby": "regional"
  }, {
    "name": "Cat, kaffir",
    "assettype": "RX-7",
    "location": "WV",
    "userby": "United States",
    "departament": "Garden",
    "managerby": "Devolved"
  }, {
    "name": "Nilgai",
    "assettype": "9-5",
    "location": "OH",
    "userby": "United States",
    "departament": "Shoes",
    "managerby": "hybrid"
  }, {
    "name": "Pampa gray fox",
    "assettype": "Wrangler",
    "location": "NE",
    "userby": "United States",
    "departament": "Jewelery",
    "managerby": "asymmetric"
  }, {
    "name": "South American puma",
    "assettype": "XJ",
    "location": "TX",
    "userby": "United States",
    "departament": "Computers",
    "managerby": "incremental"
  }, {
    "name": "Puma",
    "assettype": "Explorer",
    "location": "CA",
    "userby": "United States",
    "departament": "Movies",
    "managerby": "Streamlined"
  }, {
    "name": "Beaver, european",
    "assettype": "Grand Prix",
    "location": "DE",
    "userby": "United States",
    "departament": "Books",
    "managerby": "frame"
  }, {
    "name": "Water legaan",
    "assettype": "Escape",
    "location": "TX",
    "userby": "United States",
    "departament": "Sports",
    "managerby": "open architecture"
  }, {
    "name": "Leopard",
    "assettype": "Alpina B7",
    "location": "MO",
    "userby": "United States",
    "departament": "Home",
    "managerby": "optimizing"
  }, {
    "name": "Asian foreset tortoise",
    "assettype": "Tahoe",
    "location": "MO",
    "userby": "United States",
    "departament": "Grocery",
    "managerby": "asynchronous"
  }, {
    "name": "Marshbird, brown and yellow",
    "assettype": "Forte",
    "location": "DC",
    "userby": "United States",
    "departament": "Beauty",
    "managerby": "Synergistic"
  }, {
    "name": "Crow, american",
    "assettype": "Z4",
    "location": "CA",
    "userby": "United States",
    "departament": "Kids",
    "managerby": "Re-engineered"
  }, {
    "name": "Giant otter",
    "assettype": "CTS",
    "location": "MI",
    "userby": "United States",
    "departament": "Computers",
    "managerby": "data-warehouse"
  }, {
    "name": "Little brown bat",
    "assettype": "EXP",
    "location": "MI",
    "userby": "United States",
    "departament": "Toys",
    "managerby": "projection"
  }, {
    "name": "Galapagos sea lion",
    "assettype": "Jetta",
    "location": "CA",
    "userby": "United States",
    "departament": "Kids",
    "managerby": "mobile"
  }, {
    "name": "Common boubou shrike",
    "assettype": "Firebird",
    "location": "CA",
    "userby": "United States",
    "departament": "Kids",
    "managerby": "Seamless"
  }, {
    "name": "Deer, red",
    "assettype": "Nubira",
    "location": "LA",
    "userby": "United States",
    "departament": "Health",
    "managerby": "structure"
  }, {
    "name": "Raven, cape",
    "assettype": "RX-7",
    "location": "CA",
    "userby": "United States",
    "departament": "Kids",
    "managerby": "attitude-oriented"
  }, {
    "name": "Blacksmith plover",
    "assettype": "525",
    "location": "NY",
    "userby": "United States",
    "departament": "Outdoors",
    "managerby": "Advanced"
  }, {
    "name": "Yellow-billed hornbill",
    "assettype": "SLK-Class",
    "location": "OR",
    "userby": "United States",
    "departament": "Shoes",
    "managerby": "value-added"
  }, {
    "name": "Egyptian goose",
    "assettype": "Celica",
    "location": "CA",
    "userby": "United States",
    "departament": "Games",
    "managerby": "Customer-focused"
  }, {
    "name": "Vulture, white-headed",
    "assettype": "Bonneville",
    "location": "VT",
    "userby": "United States",
    "departament": "Industrial",
    "managerby": "discrete"
  }, {
    "name": "Eurasian badger",
    "assettype": "CLS-Class",
    "location": "NV",
    "userby": "United States",
    "departament": "Computers",
    "managerby": "Object-based"
  }, {
    "name": "Cat, jungle",
    "assettype": "E150",
    "location": "NM",
    "userby": "United States",
    "departament": "Clothing",
    "managerby": "intranet"
  }, {
    "name": "Fox, silver-backed",
    "assettype": "Sierra 3500",
    "location": "TX",
    "userby": "United States",
    "departament": "Health",
    "managerby": "Reverse-engineered"
  }, {
    "name": "Shrike, southern white-crowned",
    "assettype": "Rio",
    "location": "KY",
    "userby": "United States",
    "departament": "Games",
    "managerby": "optimal"
  }, {
    "name": "Squirrel, eastern fox",
    "assettype": "MX-5",
    "location": "DC",
    "userby": "United States",
    "departament": "Games",
    "managerby": "Open-architected"
  }, {
    "name": "Lily trotter",
    "assettype": "Catera",
    "location": "HI",
    "userby": "United States",
    "departament": "Jewelery",
    "managerby": "Business-focused"
  }, {
    "name": "Wallaby, euro",
    "assettype": "Insight",
    "location": "MN",
    "userby": "United States",
    "departament": "Toys",
    "managerby": "Decentralized"
  }, {
    "name": "North American beaver",
    "assettype": "CLK-Class",
    "location": "TN",
    "userby": "United States",
    "departament": "Outdoors",
    "managerby": "transitional"
  }, {
    "name": "Herring gull",
    "assettype": "Escalade",
    "location": "ND",
    "userby": "United States",
    "departament": "Sports",
    "managerby": "Enhanced"
  }, {
    "name": "Vulture, king",
    "assettype": "Corvette",
    "location": "KY",
    "userby": "United States",
    "departament": "Garden",
    "managerby": "Business-focused"
  }, {
    "name": "Ring-tailed lemur",
    "assettype": "riolet",
    "location": "MN",
    "userby": "United States",
    "departament": "Jewelery",
    "managerby": "emulation"
  }, {
    "name": "Common wallaroo",
    "assettype": "Excel",
    "location": "KS",
    "userby": "United States",
    "departament": "Books",
    "managerby": "Universal"
  }, {
    "name": "African jacana",
    "assettype": "Legacy",
    "location": "CA",
    "userby": "United States",
    "departament": "Home",
    "managerby": "Graphical User Interface"
  }, {
    "name": "Bohor reedbuck",
    "assettype": "New Yorker",
    "location": "CA",
    "userby": "United States",
    "departament": "Electronics",
    "managerby": "Virtual"
  }, {
    "name": "Otter, oriental short-clawed",
    "assettype": "XC90",
    "location": "CA",
    "userby": "United States",
    "departament": "Shoes",
    "managerby": "Profit-focused"
  }, {
    "name": "Meerkat",
    "assettype": "Coupe Quattro",
    "location": "TX",
    "userby": "United States",
    "departament": "Beauty",
    "managerby": "neutral"
  }, {
    "name": "Brush-tailed bettong",
    "assettype": "Tacoma",
    "location": "MA",
    "userby": "United States",
    "departament": "Outdoors",
    "managerby": "mobile"
  }, {
    "name": "Cape fox",
    "assettype": "Caravan",
    "location": "TX",
    "userby": "United States",
    "departament": "Beauty",
    "managerby": "systematic"
  }, {
    "name": "Llama",
    "assettype": "Protege5",
    "location": "LA",
    "userby": "United States",
    "departament": "Automotive",
    "managerby": "Up-sized"
  }, {
    "name": "Whip-tailed wallaby",
    "assettype": "M5",
    "location": "KY",
    "userby": "United States",
    "departament": "Beauty",
    "managerby": "even-keeled"
  }, {
    "name": "Palm squirrel",
    "assettype": "Prelude",
    "location": "CA",
    "userby": "United States",
    "departament": "Movies",
    "managerby": "next generation"
  }, {
    "name": "Tiger snake",
    "assettype": "968",
    "location": "UT",
    "userby": "United States",
    "departament": "Music",
    "managerby": "scalable"
  }, {
    "name": "Clark's nutcracker",
    "assettype": "Murciélago",
    "location": "DC",
    "userby": "United States",
    "departament": "Electronics",
    "managerby": "intermediate"
  }, {
    "name": "Tern, white-winged",
    "assettype": "Caliber",
    "location": "TX",
    "userby": "United States",
    "departament": "Shoes",
    "managerby": "multi-tasking"
  }, {
    "name": "Yellow-bellied marmot",
    "assettype": "Sentra",
    "location": "CT",
    "userby": "United States",
    "departament": "Toys",
    "managerby": "system-worthy"
  }, {
    "name": "Argalis",
    "assettype": "Interceptor",
    "location": "CA",
    "userby": "United States",
    "departament": "Games",
    "managerby": "Visionary"
  }, {
    "name": "Bee-eater, carmine",
    "assettype": "Q",
    "location": "MO",
    "userby": "United States",
    "departament": "Books",
    "managerby": "Optimized"
  }, {
    "name": "Greater rhea",
    "assettype": "LR3",
    "location": "AL",
    "userby": "United States",
    "departament": "Clothing",
    "managerby": "high-level"
  }, {
    "name": "Kinkajou",
    "assettype": "Quattroporte",
    "location": "OH",
    "userby": "United States",
    "departament": "Home",
    "managerby": "responsive"
  }, {
    "name": "Quail, gambel's",
    "assettype": "E-Class",
    "location": "FL",
    "userby": "United States",
    "departament": "Grocery",
    "managerby": "model"
  }, {
    "name": "Barbet, levaillant's",
    "assettype": "Sierra 2500HD",
    "location": "CO",
    "userby": "United States",
    "departament": "Toys",
    "managerby": "local area network"
  }, {
    "name": "Red-capped cardinal",
    "assettype": "Titan",
    "location": "GA",
    "userby": "United States",
    "departament": "Books",
    "managerby": "Seamless"
  }, {
    "name": "Eurasian badger",
    "assettype": "Achieva",
    "location": "MA",
    "userby": "United States",
    "departament": "Music",
    "managerby": "paradigm"
  }, {
    "name": "Hyrax",
    "assettype": "Taurus",
    "location": "OK",
    "userby": "United States",
    "departament": "Garden",
    "managerby": "Intuitive"
  }, {
    "name": "Owl, burrowing",
    "assettype": "Ram 2500",
    "location": "AZ",
    "userby": "United States",
    "departament": "Toys",
    "managerby": "motivating"
  }, {
    "name": "Blue peacock",
    "assettype": "ES",
    "location": "PA",
    "userby": "United States",
    "departament": "Computers",
    "managerby": "policy"
  }, {
    "name": "Scarlet macaw",
    "assettype": "LeMans",
    "location": "GA",
    "userby": "United States",
    "departament": "Automotive",
    "managerby": "Multi-tiered"
  }, {
    "name": "Rhesus macaque",
    "assettype": "Tiburon",
    "location": "KS",
    "userby": "United States",
    "departament": "Toys",
    "managerby": "Right-sized"
  }, {
    "name": "Cockatoo, slender-billed",
    "assettype": "RX",
    "location": "NJ",
    "userby": "United States",
    "departament": "Grocery",
    "managerby": "moderator"
  }, {
    "name": "Jaguar",
    "assettype": "Silverado",
    "location": "OR",
    "userby": "United States",
    "departament": "Outdoors",
    "managerby": "capacity"
  }, {
    "name": "Waved albatross",
    "assettype": "Ranger",
    "location": "AZ",
    "userby": "United States",
    "departament": "Jewelery",
    "managerby": "Stand-alone"
  }, {
    "name": "Sheep, american bighorn",
    "assettype": "Silverado",
    "location": "CA",
    "userby": "United States",
    "departament": "Garden",
    "managerby": "initiative"
  }, {
    "name": "Sage grouse",
    "assettype": "Land Cruiser",
    "location": "NY",
    "userby": "United States",
    "departament": "Sports",
    "managerby": "pricing structure"
  }, {
    "name": "Weeper capuchin",
    "assettype": "Freelander",
    "location": "CA",
    "userby": "United States",
    "departament": "Automotive",
    "managerby": "product"
  }, {
    "name": "Goldeneye, common",
    "assettype": "Leone",
    "location": "TX",
    "userby": "United States",
    "departament": "Jewelery",
    "managerby": "access"
  }, {
    "name": "Egyptian cobra",
    "assettype": "B2500",
    "location": "PA",
    "userby": "United States",
    "departament": "Movies",
    "managerby": "utilisation"
  }, {
    "name": "Grenadier, purple",
    "assettype": "LS",
    "location": "MO",
    "userby": "United States",
    "departament": "Grocery",
    "managerby": "secured line"
  }, {
    "name": "Pelican, great white",
    "assettype": "GT500",
    "location": "NY",
    "userby": "United States",
    "departament": "Music",
    "managerby": "Cloned"
  }, {
    "name": "Eagle, bald",
    "assettype": "Outback",
    "location": "CO",
    "userby": "United States",
    "departament": "Baby",
    "managerby": "neutral"
  }, {
    "name": "Quail, gambel's",
    "assettype": "S5",
    "location": "CA",
    "userby": "United States",
    "departament": "Shoes",
    "managerby": "attitude"
  }, {
    "name": "Nutcracker, clark's",
    "assettype": "Xtra",
    "location": "NV",
    "userby": "United States",
    "departament": "Grocery",
    "managerby": "monitoring"
  }, {
    "name": "Wallaby, tammar",
    "assettype": "CLK-Class",
    "location": "MD",
    "userby": "United States",
    "departament": "Outdoors",
    "managerby": "Adaptive"
  }, {
    "name": "Greater flamingo",
    "assettype": "RX-7",
    "location": "KY",
    "userby": "United States",
    "departament": "Movies",
    "managerby": "extranet"
  }, {
    "name": "Heron, giant",
    "assettype": "Econoline E350",
    "location": "TX",
    "userby": "United States",
    "departament": "Electronics",
    "managerby": "extranet"
  }, {
    "name": "Caracara (unidentified)",
    "assettype": "Fifth Ave",
    "location": "OH",
    "userby": "United States",
    "departament": "Automotive",
    "managerby": "product"
  }, {
    "name": "Magnificent frigate bird",
    "assettype": "Talon",
    "location": "KS",
    "userby": "United States",
    "departament": "Movies",
    "managerby": "motivating"
  }, {
    "name": "Ring-tailed gecko",
    "assettype": "GS",
    "location": "FL",
    "userby": "United States",
    "departament": "Beauty",
    "managerby": "Graphical User Interface"
  }, {
    "name": "Swallow (unidentified)",
    "assettype": "Discovery",
    "location": "LA",
    "userby": "United States",
    "departament": "Baby",
    "managerby": "Networked"
  }, {
    "name": "Egret, snowy",
    "assettype": "Sable",
    "location": "CA",
    "userby": "United States",
    "departament": "Games",
    "managerby": "next generation"
  }, {
    "name": "Viper, egyptian",
    "assettype": "M6",
    "location": "NE",
    "userby": "United States",
    "departament": "Clothing",
    "managerby": "Team-oriented"
  }, {
    "name": "Cliffchat, mocking",
    "assettype": "Grand Cherokee",
    "location": "NY",
    "userby": "United States",
    "departament": "Music",
    "managerby": "Synergized"
  }, {
    "name": "Monster, gila",
    "assettype": "Bonneville",
    "location": "CA",
    "userby": "United States",
    "departament": "Garden",
    "managerby": "Integrated"
  }, {
    "name": "Anteater, australian spiny",
    "assettype": "S4",
    "location": "FL",
    "userby": "United States",
    "departament": "Beauty",
    "managerby": "Polarised"
  }, {
    "name": "Striated heron",
    "assettype": "Elantra",
    "location": "DC",
    "userby": "United States",
    "departament": "Clothing",
    "managerby": "scalable"
  }, {
    "name": "Squirrel, african bush",
    "assettype": "Corsica",
    "location": "DC",
    "userby": "United States",
    "departament": "Clothing",
    "managerby": "human-resource"
  }, {
    "name": "Boa, columbian rainbow",
    "assettype": "Allroad",
    "location": "CO",
    "userby": "United States",
    "departament": "Sports",
    "managerby": "architecture"
  }, {
    "name": "Alligator, american",
    "assettype": "Veracruz",
    "location": "NV",
    "userby": "United States",
    "departament": "Outdoors",
    "managerby": "time-frame"
  }, {
    "name": "White-winged dove",
    "assettype": "M3",
    "location": "VA",
    "userby": "United States",
    "departament": "Computers",
    "managerby": "Advanced"
  }, {
    "name": "Tortoise, asian foreset",
    "assettype": "Stylus",
    "location": "CA",
    "userby": "United States",
    "departament": "Jewelery",
    "managerby": "Triple-buffered"
  }, {
    "name": "White-eye, cape",
    "assettype": "RX-7",
    "location": "CA",
    "userby": "United States",
    "departament": "Baby",
    "managerby": "Switchable"
  }, {
    "name": "Kingfisher, white-throated",
    "assettype": "Tacoma",
    "location": "TN",
    "userby": "United States",
    "departament": "Outdoors",
    "managerby": "contextually-based"
  }, {
    "name": "Long-tailed skua",
    "assettype": "TundraMax",
    "location": "AL",
    "userby": "United States",
    "departament": "Tools",
    "managerby": "Enterprise-wide"
  }
];

/**
 * Data source for the Products view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductsDataSource extends DataSource<ProductsItem> {
  data: ProductsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ProductsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ProductsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ProductsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'assettype': return compare(a.assettype, b.assettype, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'userby': return compare(a.userby, b.userby, isAsc);
        case 'departament': return compare(a.departament, b.departament, isAsc);
        case 'managerby': return compare(a.managerby, b.managerby, isAsc);
        //case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

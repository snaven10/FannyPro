export interface product {
    id: number;
    category_id: number;
    name: string;
    manofacture: string;
    count: string;
    location: string;
    description: string;
}

export interface vendors {
    id: number;
    vendorname: string;
    price: number;
    warrantyvalidity: string;
    quantity: number;
  }
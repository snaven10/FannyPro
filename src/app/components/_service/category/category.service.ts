import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../_model/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  changeCategory = new Subject<Category[]>();
  changeMssg = new Subject<string>();

  url: string = `${environment.HOST}/category`;
  private category: Category[];

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Category[]>(this.url);
  }


  addCategory(category: Category) {
    return this.http.post(this.url,category);
  }

  newCategory(): Category {
    return {
      id: this.category.length,
      name: ''
    };
  }
  update(category: Category){
    return this.http.put(this.url,category);
  }
}

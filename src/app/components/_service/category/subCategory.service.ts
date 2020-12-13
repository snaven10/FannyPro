import { Injectable } from '@angular/core';
import { Category } from '../../_model/category.model';
import { subCategory } from '../../_model/subCategory.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  changeSubCategory = new Subject<subCategory[]>();
  changeMssg = new Subject<string>();

  url: string = `${environment.HOST}/category`;
  private subCategory: subCategory[];

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<subCategory[]>(this.url)
    .pipe(
      map(data =>{
        return data.map( resp => {
          return resp.subCategory
        })
      })
    );
  }

  getsubCategory() {
    return this.subCategory;
  }

  addsubCategoy(subcategory: subCategory) {
    this.subCategory.push(subcategory)
  }

  newsubCategory(): subCategory {
    return {
      id: this.subCategory.length,
      subCategory: 0,
      name: ''
    };
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicenhanvienService {
  productURL1 = 'http://localhost:8080/nhanvien/pages?';

  constructor(private httpClient: HttpClient) { }
  public page(page: number, size: number, order: string, asc: boolean, id: number): Observable<any> {
    return this.httpClient.get<any>(this.productURL1 + `page=${page}&size=${size}&order=${order}&asc=${asc}&phongbanid=${id}`);
  }
}

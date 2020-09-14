import { NhanVien } from './../../model/nhanvien';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicenhanvienService } from 'src/app/Service/servicenhanvien.service';

@Component({
  selector: 'app-quanlitaikhoan',
  templateUrl: './quanlitaikhoan.component.html',
  styleUrls: ['./quanlitaikhoan.component.css']
})
export class QuanlitaikhoanComponent implements OnInit {
  totalPages: Array<number>;
  page = 0;
  size = 3;
  order = 'tenNhanVien';
  asc = true;
  isFirst = false;
  isLast = false;
  NhanViens: Array<any>;
  id: number;
  nhanvien: NhanVien[] = [];

  constructor(private httpClient: HttpClient ,
    private service: ServicenhanvienService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listPhongBan();
  }
  // tslint:disable-next-line: typedef
  listPhongBan() {
    this.route.params.subscribe(praram => {
      this.service.page(this.page, this.size, this.order, this.asc,praram.phongbanid ).subscribe(data =>{
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data.totalPages);
        this.nhanvien = data.content;
        console.log(praram.phongbanid);
      }, err => {
        console.log(err.error);
      });
    });
  }
  sort(): void {
    this.asc = !this.asc;
    this.listPhongBan();
  }
  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.listPhongBan();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.listPhongBan();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.listPhongBan();
  }

  setOrder(order: string): void {
    this.order = order;
    this.listPhongBan();
  }

}

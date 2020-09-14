import { Component, OnInit } from '@angular/core';
import { ServicephongbanService } from 'src/app/Service/servicephongban.service';
import { ActivatedRoute , Route, Router } from '@angular/router';
import { PhongBan } from 'src/app/model/phongban';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quanli-phongban',
  templateUrl: './quanli-phongban.component.html',
  styleUrls: ['./quanli-phongban.component.css']
})
export class QuanliPhongbanComponent implements OnInit {
  name  = '';
  ghiChu = '';
  sdt = '';
  img = '';

  constructor(private service: ServicephongbanService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }
// tslint:disable-next-line: typedef

}

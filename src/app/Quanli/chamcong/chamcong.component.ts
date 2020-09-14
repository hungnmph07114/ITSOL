import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as moment from 'moment';
@Component({
  selector: 'app-chamcong',
  templateUrl: './chamcong.component.html',
  styleUrls: ['./chamcong.component.css'],
})
@Injectable()
export class ChamcongComponent implements OnInit {
  api = 'http://localhost:8081/nhanvien';
  datetime: string = '';
  constructor() {

  let monetdate = moment().format('DD/MM/YYYY');
     this.datetime = monetdate;
  }

  ngOnInit(): void {}
}

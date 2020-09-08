import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-chamcong',
  templateUrl: './chamcong.component.html',
  styleUrls: ['./chamcong.component.css']
})
  @Injectable()
export class ChamcongComponent implements OnInit {
  api = 'http://localhost:8081/nhanvien';
  constructor() { }

  ngOnInit(): void {
  }

}

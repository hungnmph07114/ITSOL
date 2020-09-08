import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinTaikhoanComponent } from './thongtin-taikhoan.component';

describe('ThongtinTaikhoanComponent', () => {
  let component: ThongtinTaikhoanComponent;
  let fixture: ComponentFixture<ThongtinTaikhoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinTaikhoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinTaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

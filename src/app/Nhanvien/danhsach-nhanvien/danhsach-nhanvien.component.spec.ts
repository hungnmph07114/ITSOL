import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachNhanvienComponent } from './danhsach-nhanvien.component';

describe('DanhsachNhanvienComponent', () => {
  let component: DanhsachNhanvienComponent;
  let fixture: ComponentFixture<DanhsachNhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachNhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

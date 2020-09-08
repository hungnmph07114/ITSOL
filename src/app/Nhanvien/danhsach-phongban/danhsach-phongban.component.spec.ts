import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachPhongbanComponent } from './danhsach-phongban.component';

describe('DanhsachPhongbanComponent', () => {
  let component: DanhsachPhongbanComponent;
  let fixture: ComponentFixture<DanhsachPhongbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachPhongbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachPhongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

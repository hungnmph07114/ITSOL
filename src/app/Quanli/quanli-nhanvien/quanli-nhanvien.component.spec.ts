import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanliNhanvienComponent } from './quanli-nhanvien.component';

describe('QuanliNhanvienComponent', () => {
  let component: QuanliNhanvienComponent;
  let fixture: ComponentFixture<QuanliNhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanliNhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanliNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

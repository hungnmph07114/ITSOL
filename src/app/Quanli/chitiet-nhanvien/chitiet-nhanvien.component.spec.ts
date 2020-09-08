import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietNhanvienComponent } from './chitiet-nhanvien.component';

describe('ChitietNhanvienComponent', () => {
  let component: ChitietNhanvienComponent;
  let fixture: ComponentFixture<ChitietNhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietNhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

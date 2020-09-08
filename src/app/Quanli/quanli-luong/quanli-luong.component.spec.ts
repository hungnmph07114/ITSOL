import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanliLuongComponent } from './quanli-luong.component';

describe('QuanliLuongComponent', () => {
  let component: QuanliLuongComponent;
  let fixture: ComponentFixture<QuanliLuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanliLuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanliLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

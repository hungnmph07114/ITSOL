import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietLuongComponent } from './chitiet-luong.component';

describe('ChitietLuongComponent', () => {
  let component: ChitietLuongComponent;
  let fixture: ComponentFixture<ChitietLuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietLuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

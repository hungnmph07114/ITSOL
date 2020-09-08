import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanliPhongbanComponent } from './quanli-phongban.component';

describe('QuanliPhongbanComponent', () => {
  let component: QuanliPhongbanComponent;
  let fixture: ComponentFixture<QuanliPhongbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanliPhongbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanliPhongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

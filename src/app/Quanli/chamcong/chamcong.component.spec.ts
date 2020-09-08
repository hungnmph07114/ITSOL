import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamcongComponent } from './chamcong.component';

describe('ChamcongComponent', () => {
  let component: ChamcongComponent;
  let fixture: ComponentFixture<ChamcongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamcongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamcongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuongcanhanComponent } from './luongcanhan.component';

describe('LuongcanhanComponent', () => {
  let component: LuongcanhanComponent;
  let fixture: ComponentFixture<LuongcanhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuongcanhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuongcanhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

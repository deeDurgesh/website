import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonRoutingComponent } from './common-routing.component';

describe('CommonRoutingComponent', () => {
  let component: CommonRoutingComponent;
  let fixture: ComponentFixture<CommonRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

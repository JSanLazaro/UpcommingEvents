import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuserdetailsComponent } from './vuserdetails.component';

describe('VuserdetailsComponent', () => {
  let component: VuserdetailsComponent;
  let fixture: ComponentFixture<VuserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VuserdetailsComponent]
    });
    fixture = TestBed.createComponent(VuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

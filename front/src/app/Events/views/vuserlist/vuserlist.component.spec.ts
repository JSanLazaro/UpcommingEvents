import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuserlistComponent } from './vuserlist.component';

describe('VuserlistComponent', () => {
  let component: VuserlistComponent;
  let fixture: ComponentFixture<VuserlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VuserlistComponent]
    });
    fixture = TestBed.createComponent(VuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

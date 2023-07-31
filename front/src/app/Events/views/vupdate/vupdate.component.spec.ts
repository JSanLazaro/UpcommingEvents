import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VupdateComponent } from './vupdate.component';

describe('VupdateComponent', () => {
  let component: VupdateComponent;
  let fixture: ComponentFixture<VupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VupdateComponent]
    });
    fixture = TestBed.createComponent(VupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

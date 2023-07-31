import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VloginComponent } from './vlogin.component';

describe('VloginComponent', () => {
  let component: VloginComponent;
  let fixture: ComponentFixture<VloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VloginComponent]
    });
    fixture = TestBed.createComponent(VloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

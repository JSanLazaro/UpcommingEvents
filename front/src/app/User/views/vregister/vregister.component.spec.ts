import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VregisterComponent } from './vregister.component';

describe('VregisterComponent', () => {
  let component: VregisterComponent;
  let fixture: ComponentFixture<VregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VregisterComponent]
    });
    fixture = TestBed.createComponent(VregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

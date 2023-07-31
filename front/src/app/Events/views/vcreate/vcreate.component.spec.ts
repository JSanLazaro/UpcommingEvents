import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcreateComponent } from './vcreate.component';

describe('VcreateComponent', () => {
  let component: VcreateComponent;
  let fixture: ComponentFixture<VcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VcreateComponent]
    });
    fixture = TestBed.createComponent(VcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

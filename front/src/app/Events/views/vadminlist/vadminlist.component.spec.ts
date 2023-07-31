import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadminlistComponent } from './vadminlist.component';

describe('VadminlistComponent', () => {
  let component: VadminlistComponent;
  let fixture: ComponentFixture<VadminlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VadminlistComponent]
    });
    fixture = TestBed.createComponent(VadminlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

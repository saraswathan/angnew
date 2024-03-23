import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtableComponent } from './vtable.component';

describe('VtableComponent', () => {
  let component: VtableComponent;
  let fixture: ComponentFixture<VtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

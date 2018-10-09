import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryButtonComponent } from './memory-button.component';

describe('MemoryButtonComponent', () => {
  let component: MemoryButtonComponent;
  let fixture: ComponentFixture<MemoryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

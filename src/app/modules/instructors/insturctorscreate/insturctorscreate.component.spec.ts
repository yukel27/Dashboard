import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsturctorscreateComponent } from './insturctorscreate.component';

describe('InsturctorscreateComponent', () => {
  let component: InsturctorscreateComponent;
  let fixture: ComponentFixture<InsturctorscreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsturctorscreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsturctorscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasescreateComponent } from './casescreate.component';

describe('CasescreateComponent', () => {
  let component: CasescreateComponent;
  let fixture: ComponentFixture<CasescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasescreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

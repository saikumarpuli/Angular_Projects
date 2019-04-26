import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThretreDetailsComponent } from './thretre-details.component';

describe('ThretreDetailsComponent', () => {
  let component: ThretreDetailsComponent;
  let fixture: ComponentFixture<ThretreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThretreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThretreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

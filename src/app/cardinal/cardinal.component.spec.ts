import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinalComponent } from './cardinal.component';

describe('CardinalComponent', () => {
  let component: CardinalComponent;
  let fixture: ComponentFixture<CardinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

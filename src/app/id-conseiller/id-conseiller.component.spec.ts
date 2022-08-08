import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdConseillerComponent } from './id-conseiller.component';

describe('IdConseillerComponent', () => {
  let component: IdConseillerComponent;
  let fixture: ComponentFixture<IdConseillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdConseillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

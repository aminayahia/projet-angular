import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutreservationComponent } from './ajoutreservation.component';

describe('AjoutreservationComponent', () => {
  let component: AjoutreservationComponent;
  let fixture: ComponentFixture<AjoutreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutreservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

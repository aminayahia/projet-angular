import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationReservationComponent } from './modification-reservation.component';

describe('ModificationReservationComponent', () => {
  let component: ModificationReservationComponent;
  let fixture: ComponentFixture<ModificationReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

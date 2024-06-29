import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreservationComponent } from './detailreservation.component';

describe('DetailreservationComponent', () => {
  let component: DetailreservationComponent;
  let fixture: ComponentFixture<DetailreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailreservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

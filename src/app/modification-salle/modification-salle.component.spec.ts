import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationSalleComponent } from './modification-salle.component';

describe('ModificationSalleComponent', () => {
  let component: ModificationSalleComponent;
  let fixture: ComponentFixture<ModificationSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationSalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

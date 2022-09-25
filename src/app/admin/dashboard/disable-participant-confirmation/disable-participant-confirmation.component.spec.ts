import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableParticipantConfirmationComponent } from './disable-participant-confirmation.component';

describe('DisableParticipantConfirmationComponent', () => {
  let component: DisableParticipantConfirmationComponent;
  let fixture: ComponentFixture<DisableParticipantConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableParticipantConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableParticipantConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParticipantConfirmationComponent } from './delete-participant-confirmation.component';

describe('DeleteParticipantConfirmationComponent', () => {
  let component: DeleteParticipantConfirmationComponent;
  let fixture: ComponentFixture<DeleteParticipantConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteParticipantConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteParticipantConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

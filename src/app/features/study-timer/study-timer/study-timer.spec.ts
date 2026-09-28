import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTimer } from './study-timer';

describe('StudyTimer', () => {
  let component: StudyTimer;
  let fixture: ComponentFixture<StudyTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyTimer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudyTimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

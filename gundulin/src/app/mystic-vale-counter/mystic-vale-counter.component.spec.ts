import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticValeCounterComponent } from './mystic-vale-counter.component';

describe('MysticValeCounterComponent', () => {
  let component: MysticValeCounterComponent;
  let fixture: ComponentFixture<MysticValeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysticValeCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysticValeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatPatrolListComponent } from './combat-patrol-list.component';

describe('CombatPatrolListComponent', () => {
  let component: CombatPatrolListComponent;
  let fixture: ComponentFixture<CombatPatrolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatPatrolListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombatPatrolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

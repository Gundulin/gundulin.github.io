import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrolService } from '../services/patrol.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-combat-patrol-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './combat-patrol-list.component.html',
  styleUrl: './combat-patrol-list.component.scss'
})
export class CombatPatrolListComponent {

  combatPatrols: string[];
  show: boolean = true;

  constructor(private patrol: PatrolService) {
    this.combatPatrols = this.patrol.getCombatPatrolNames();
  }

  protected goToGuide(armyName: string): void {
    console.log('You pressed the ' + armyName + ' button!');
  }
}

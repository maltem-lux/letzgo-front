import {Component, Input, OnInit} from '@angular/core';
import {Ability} from '../../models/ability';
import {CharAbilities} from '../../models/charAbilities';
import {AbilitiesService} from '../../services/abilities/abilities.service';


@Component({
  selector: 'app-character-abilities',
  templateUrl: './character-abilities.component.html',
  styleUrls: ['./character-abilities.component.css']
})
export class CharacterAbilitiesComponent implements OnInit {

  @Input() charId: number;
  private _abilities: Array<Ability>;
  private readonly _charAbilities: Map<number, CharAbilities>;

  constructor(private _abilitiesService: AbilitiesService) {
    this._charAbilities = new Map();
  }

  ngOnInit() {
    this.loadAbilities();
  }

  private loadAbilities() {
    this._abilitiesService.getAbilities().subscribe(
      (resA: Array<Ability>) => {
        this.abilities = resA;
        this._abilitiesService.getCharAbilities().subscribe(
          (resCa: Array<CharAbilities>) => {
            this._abilities.forEach(a => {
              this._charAbilities.set(a.abilityId,
                resCa.find(ca => ca.abilityId === a.abilityId));
            });
          });
      }
    );
  }

  get abilities(): Array<Ability> {
    return this._abilities;
  }

  set abilities(value: Array<Ability>) {
    this._abilities = value;
  }

  get charAbilities(): Map<number, CharAbilities> {
    return this._charAbilities;
  }
}

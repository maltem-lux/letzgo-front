import { Component, OnInit } from '@angular/core';
import {AbilitiesService} from '../../services/abilities/abilities.service';
import {Ability} from '../../models/ability';
import {CharAbilities} from '../../models/charAbilities';
import {Tools} from '../../utils/tools';
import {ActivatedRoute, Params, Router, RouterModule} from '@angular/router';
import {Location} from '@angular/common';
import {CharactersService} from '../../services/characters/characters.service';
import {Character} from '../../models/character';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private _abilities: Array<Ability>;
  private _charAbilities: Map<number, CharAbilities>;
  private _charId: number;
  private _currentChar: Character;

  constructor(private _abilitiesService: AbilitiesService,
              private _charactersService: CharactersService,
              private _location: Location, private route: ActivatedRoute, private router: Router) {
    this._charAbilities = new Map();
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:radix
      this._charId = Number.parseInt(params.charId);
    });
  }

  ngOnInit() {
    Tools.CHARACTER = this._charId;
    this.loadAbilities();
    this.loadBasicInformation();
  }

  private loadAbilities() {
    this._abilitiesService.getAbilities().subscribe(
      (resA: Array<Ability>) => {
        this.abilities = resA;
        this._abilitiesService.getCharAbilities().subscribe(
          (resCa: Array<CharAbilities>) => {
            this._abilities.forEach(a => {
              this._charAbilities.set(a.abilityId,
                resCa.find(ca => ca.abilityId === a.abilityId ));
            });
          });
      }
    );
  }

  private loadBasicInformation() {
    this._charactersService.getCharacterById(this._charId)
      .subscribe( (res: Character) => {
        this._currentChar = res;
    });
  }

  get currentChar(): Character {
    return this._currentChar;
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

  set charAbilities(value: Map<number, CharAbilities>) {
    this._charAbilities = value;
  }

  public back() {
    this._location.back();
  }
}

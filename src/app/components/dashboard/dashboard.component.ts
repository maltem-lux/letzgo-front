import { Component, OnInit } from '@angular/core';
import {AbilitiesService} from '../../services/abilities/abilities.service';
import {Ability} from '../../models/ability';
import {CharAbilities} from '../../models/charAbilities';
import {Tools} from '../../utils/tools';
import {Router, RouterModule} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private abilitiesService: AbilitiesService;
  private _abilities: Array<Ability>;
  private _charAbilities: Map<number, CharAbilities>;

  constructor(abilitiesService: AbilitiesService, private _location: Location) {
    this.abilitiesService = abilitiesService;
    this.charAbilities = new Map();
  }

  ngOnInit() {
    Tools.CHARACTER = 1;
    this.abilitiesService.getAbilities().subscribe(
      (resA: Array<Ability>) => {
        this.abilities = resA;
        this.abilitiesService.getCharAbilities().subscribe(
          (resCa: Array<CharAbilities>) => {
            this._abilities.forEach(a => {
              this._charAbilities.set(a.abilityId,
                resCa.find(ca => ca.abilityId === a.abilityId ));
            });
            console.log(this.charAbilities);
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

  set charAbilities(value: Map<number, CharAbilities>) {
    this._charAbilities = value;
  }

  public back() {
    this._location.back();
  }
}

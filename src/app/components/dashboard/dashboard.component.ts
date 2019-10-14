import {Component, OnInit} from '@angular/core';
import {AbilitiesService} from '../../services/abilities/abilities.service';
import {Ability} from '../../models/ability';
import {CharAbilities} from '../../models/charAbilities';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private _abilities: Array<Ability>;
  private readonly _charAbilities: Map<number, CharAbilities>;
  private _charId: number;

  constructor(private _abilitiesService: AbilitiesService,
              private _location: Location, private route: ActivatedRoute) {
    this._charAbilities = new Map();
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:radix
      this._charId = Number.parseInt(params.charId);
    });
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
                resCa.find(ca => ca.abilityId === a.abilityId ));
            });
          });
      }
    );
  }

  get charId(): number {
    return this._charId;
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

  public back() {
    this._location.back();
  }
}

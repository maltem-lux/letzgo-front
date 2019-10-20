import {Component, OnInit} from '@angular/core';
import {AbilitiesService} from '../../services/abilities/abilities.service';
import {CharAbilities} from '../../models/charAbilities';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
  }

  get charId(): number {
    return this._charId;
  }
  public back() {
    this._location.back();
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {SkillsService} from '../../services/skills/skills.service';
import {Skills} from '../../models/skills';
import {CharSkills} from '../../models/charSkills';


@Component({
  selector: 'app-character-skills',
  templateUrl: './character-skills.component.html',
  styleUrls: ['./character-skills.component.css']
})
export class CharacterSkillsComponent implements OnInit {

  @Input() charId: number;
  private _skills: Array<Skills>;
  private readonly _charSkills: Map<number, CharSkills>;


  constructor(private _skillsService: SkillsService) {
    this._charSkills = new Map();
  }

  ngOnInit() {
    this.loadSkills();
  }

  private loadSkills() {
    this._skillsService.getSkills().subscribe(
      (resS: Array<Skills>) => {
        this.skills = resS;
        this._skillsService.getCharSkills().subscribe(
          (resCs: Array<CharSkills>) => {
            this._skills.forEach(s => {
              this._charSkills.set(s.skillId,
                resCs.find(cs => cs.skillId === s.skillId));
            });
          });
      }
    );
  }


  get skills(): Array<Skills> {
    return this._skills;
  }

  set skills(value: Array<Skills>) {
    this._skills = value;
  }

  get charSkills(): Map<number, CharSkills> {
    return this._charSkills;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {SkillsService} from '../../services/skills/skills.service';


@Component({
  selector: 'app-character-skills',
  templateUrl: './character-skills.component.html',
  styleUrls: ['./character-skills.component.css']
})
export class CharacterSkillsComponent implements OnInit {

  @Input() charId: number;

  constructor(private _skillsService: SkillsService) {
    // Default
  }

  ngOnInit() {
    this.loadSkills();
  }

  private loadSkills() {
    // TODO Implement me !
  }
}

export class Character {
  charId: number;
  raceId: number;
  playerId: number;
  campaign: number;
  campaignCredentials: number;
  age: number;
  gender: string;
  name: string;
  level: number;
  alignment: string;
  deity: string;
  height: number;
  heightUnit: string;
  weight: number;
  weightUnit: string;
  creationDate: Date;


 constructor() {
    this.charId = null;
    this.raceId = null;
    this.playerId = null;
    this.campaign = null;
    this.campaignCredentials = null;
    this.age = null;
    this.gender = '';
    this.name = '';
    this.level = 1;
    this.alignment = '';
    this.deity = '';
    this.height = null;
    this.heightUnit = 'kg';
    this.weight = null;
    this.weightUnit = 'kg';
    this.creationDate = new Date();
  }
}

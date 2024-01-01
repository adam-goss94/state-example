import { Component, Input, OnInit } from '@angular/core';
import { LegendaryDrop } from 'src/app/models/monsters/monsters.interface';
import { MonstersService } from 'src/app/services/monsters/monsters.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() public itemList: any;
  
  public keysOrder = [
    "type", "weight", "capacity", "value", "requiredLevel",
    "requiredStrength", "requiredDexterity", "requiredPower", "requiredKnowledge",
    "damage", "damageType", "strength", "dexterity", "power",
    "knowledge", "health", "mana", "stamina", "armorSlashing",
    "armorCrushing", "armorPiercing", "fireResistance", "coldResistance",
    "energyResistance", "mentalResistance"
  ];
  public filteredOrder: string[] = []

  constructor(private monstersService: MonstersService) { }

  ngOnInit(): void {
    this.filteredOrder = this.keysOrder.filter(key => this.itemList[key] !== null);
  }

  addToComparison(): void {
    this.monstersService.updateState(this.itemList)
  }
}

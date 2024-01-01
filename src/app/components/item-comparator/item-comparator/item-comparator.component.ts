import { Component, OnInit } from '@angular/core';
import { MonstersService } from 'src/app/services/monsters/monsters.service';

@Component({
  selector: 'app-item-comparator',
  templateUrl: './item-comparator.component.html',
  styleUrls: ['./item-comparator.component.scss'],
})
export class ItemComparatorComponent implements OnInit {
  public currentState: any;
  constructor(private monstersService: MonstersService) {}

  ngOnInit(): void {
    this.showState()
  }

  showState() {
    this.monstersService.comparisionState$.subscribe((state) => {
      this.currentState = state;
      console.log(this.currentState);
    });
  }
}

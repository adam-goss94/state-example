import { Component, OnInit } from '@angular/core';
import { Boss } from 'src/app/models/monsters/monsters.interface';
import { MonstersService } from 'src/app/services/monsters/monsters.service';

@Component({
  selector: 'app-rar-list',
  templateUrl: './rar-list.component.html',
  styleUrls: ['./rar-list.component.scss']
})
export class RarListComponent implements OnInit {

  public bosses: Boss[] = [];

  constructor(private bossService: MonstersService) {}

  ngOnInit(): void {
    this.bossService.getBosses().subscribe((bosses) => {
      this.bosses = bosses;
      console.log(this.bosses)
    });

    
  }

}

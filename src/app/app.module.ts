// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MonstersService } from './services/monsters/monsters.service';
import { RarListComponent } from './components/rar-list/rar-list.component';
import { ListItemComponent } from './components/common/list-item/list-item.component';
import { ItemComparatorComponent } from './components/item-comparator/item-comparator/item-comparator.component';

@NgModule({
  declarations: [AppComponent, RarListComponent, ListItemComponent, ItemComparatorComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MonstersService],
  bootstrap: [AppComponent],
})
export class AppModule {}

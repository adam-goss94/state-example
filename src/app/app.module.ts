// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MonstersService } from './services/monsters/monsters.service';
import { RarListComponent } from './components/rar-list/rar-list.component';

@NgModule({
  declarations: [AppComponent, RarListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MonstersService],
  bootstrap: [AppComponent],
})
export class AppModule {}

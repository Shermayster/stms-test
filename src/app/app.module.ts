
import { DataService } from './shared/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  appRoutes from './app.router';
import { AppComponent } from './app.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { FavoritesTableComponent } from './favorites-table/favorites-table.component';
import {HttpService} from "./shared/http.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemsTableComponent,
    FavoritesTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { CharactersComponent } from './characters/characters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CharactersComponent,
    EpisodesComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class PagesModule { }

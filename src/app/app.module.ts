import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { SearchZipPipe } from './search-zip.pipe';
import { SearchAgePipe } from './search-age.pipe';
import { SearchCountryPipe } from './search-country.pipe';

@NgModule({
  declarations: [AppComponent, SearchPipe, MembersComponent, ProfileComponent, NavComponent, SearchZipPipe, SearchAgePipe, SearchCountryPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

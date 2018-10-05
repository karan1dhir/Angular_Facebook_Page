import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MainsectionComponent } from "./mainsection/mainsection.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainsectionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

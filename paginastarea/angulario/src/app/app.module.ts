import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortadaComponent } from './portada/portada.component';
import { NuevaCartaComponent } from './nueva-carta/nueva-carta.component';
import { DevelopComponent } from './develop/develop.component';
import { SpeedComponent } from './speed/speed.component';
import { ToolingComponent } from './tooling/tooling.component';
import { LovedComponent } from './loved/loved.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    NuevaCartaComponent,
    DevelopComponent,
    SpeedComponent,
    ToolingComponent,
    LovedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

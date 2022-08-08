import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Calendrier
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
// Fin Calendrier


// Stepper 
import {MatStepperModule} from '@angular/material/stepper';

//Card
import {MatCardModule} from '@angular/material/card';

//Formulaire
import {MatFormFieldModule} from '@angular/material/form-field';

//Spinner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConseillersComponent } from './conseillers/conseillers.component';
import { AccueilComponent } from './accueil/accueil.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { IdConseillerComponent } from './id-conseiller/id-conseiller.component';
import { TestComponent } from './test/test.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    ConseillersComponent,
    AccueilComponent,
    IdConseillerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FullCalendarModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

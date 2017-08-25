import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EocagentComponent } from './users/src/app/users/eocagent/eocagent.component';
import { ResponderComponent } from './users/src/app/users/responder/responder.component';
import { VictimuserComponent } from './users/src/app/users/victimuser/victimuser.component';
import { AdminComponent } from './users/src/app/users/admin/admin.component';
import { MediaComponent } from './src/app/media/media.component';
import { SoundComponent } from './media/src/app/media/sound/sound.component';
import { VideoComponent } from './media/src/app/media/video/video.component';
import { PicturesComponent } from './media/src/app/media/pictures/pictures.component';
import { LocationComponent } from './src/app/location/location.component';
import { AlertsComponent } from './src/app/alerts/alerts.component';
import { MedicalComponent } from './alerts/src/app/alerts/medical/medical.component';
import { SecurityComponent } from './alerts/src/app/alerts/security/security.component';
import { IncidentComponent } from './src/app/incident/incident.component';
import { ProvidersComponent } from './src/app/providers/providers.component';
import { AmbulanceComponent } from './providers/src/app/providers/ambulance/ambulance.component';
import { FireComponent } from './providers/src/app/providers/fire/fire.component';
import { PoliceComponent } from './providers/src/app/providers/police/police.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EocagentComponent,
    ResponderComponent,
    VictimuserComponent,
    AdminComponent,
    MediaComponent,
    SoundComponent,
    VideoComponent,
    PicturesComponent,
    LocationComponent,
    AlertsComponent,
    MedicalComponent,
    SecurityComponent,
    IncidentComponent,
    ProvidersComponent,
    AmbulanceComponent,
    FireComponent,
    PoliceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

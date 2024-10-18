import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EvHistoryComponent } from './ev-history/ev-history.component';
import { IcHistoryComponent } from './ic-history/ic-history.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { AerodynamicsComponent } from './aerodynamics/aerodynamics.component';
import { BrakesAndControlsComponent } from './brakes-and-controls/brakes-and-controls.component';
import { VehicleDynamicsComponent } from './vehicle-dynamics/vehicle-dynamics.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { PowertrainComponent } from './powertrain/powertrain.component';
import { HighVoltageComponent } from './high-voltage/high-voltage.component';
import { EvCompetitionComponent } from './ev-competition/ev-competition.component';
import { IcCompetitionComponent } from './ic-competition/ic-competition.component';
import { EvSponsorsComponent } from './ev-sponsors/ev-sponsors.component';
import { IcSponsorsComponent } from './ic-sponsors/ic-sponsors.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  // Home
  { path: 'home', component: HomeComponent },

  // EV History
  { path: 'ev-history', component: EvHistoryComponent},

  // IC History
  { path: 'ic-history', component: IcHistoryComponent},

  // Meet the Team
  { path: 'meet-the-team', component: MeetTheTeamComponent},

  // Aero
  { path: 'aerodynamics', component: AerodynamicsComponent},

  // Brakes and Controls
  { path: 'brakes-and-controls', component: BrakesAndControlsComponent},

  // Vehicle Dynamics
  { path: 'vehicle-dynamics', component: VehicleDynamicsComponent},

  // Electronics
  { path: 'electronics', component: ElectronicsComponent},

  // PowerTrain
  { path: 'powertrain', component: PowertrainComponent},

  // High Voltage
  { path: 'high-voltage', component: HighVoltageComponent},

  // EV Comp
  { path: 'ev-competition', component: EvCompetitionComponent},

  // IC Comp
  { path: 'ic-competition', component: IcCompetitionComponent},

  // EV Sponsors
  { path: 'ev-sponsors', component: EvSponsorsComponent},

  // EV Sponsors
  { path: 'ic-sponsors', component: IcSponsorsComponent},

  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


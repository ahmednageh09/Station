import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalNavComponent } from './components/navbar/horizontal-nav/horizontal-nav.component';
import { VerticalNavComponent } from './components/navbar/vertical-nav/vertical-nav.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagsComponent } from './components/tags/tags.component';
import { AsideComponent } from './components/aside/aside.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { StationsComponent } from './components/stations/stations.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StationDialogComponent } from './components/station-dialog/station-dialog.component';
import { StationSalesComponent } from './components/station-sales/station-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalNavComponent,
    VerticalNavComponent,
    HomeComponent,
    TagsComponent,
    AsideComponent,
    BarChartComponent,
    RadarChartComponent,
    StationsComponent,
    StationDialogComponent,
    StationSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

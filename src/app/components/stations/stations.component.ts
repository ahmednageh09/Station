import { Component } from '@angular/core';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss'],
})
export class StationsComponent {
  stations: Station[] = [];
  constructor(private service: StationService, private dialogService: StationService) {
    this.stations = service.getStation();
  }

  openStationDialog(event:MouseEvent): void {
    this.dialogService.openStationDialog(event);
  }
}

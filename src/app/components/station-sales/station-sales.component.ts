import { Component } from '@angular/core';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'station-sales',
  templateUrl: './station-sales.component.html',
  styleUrls: ['./station-sales.component.scss']
})
export class StationSalesComponent {
  stations: Station[] = [];
  constructor(private service: StationService, private dialogService: StationService) {
    this.stations = service.getStation();
  }
}

import { Injectable } from '@angular/core';
import { Tag } from '../models/tags';
import { sample_station, sample_tags } from '../data';
import { Station } from '../models/station';
import { MatDialog } from '@angular/material/dialog';
import { StationDialogComponent } from '../components/station-dialog/station-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  constructor(private dialog: MatDialog) {}

  getTag(): Tag[] {
    return sample_tags;
  }
  getStation(): Station[] {
    return sample_station;
  }

  openStationDialog(event:MouseEvent): void {
    this.dialog.open(StationDialogComponent, {
      width: '400px',
      height: '150px',
      position: {
        top: event.clientY + 'px',
        left: event.clientX + -420 + 'px',
      },
    });
  }
}

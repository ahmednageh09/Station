import { Component } from '@angular/core';
import { Tag } from 'src/app/models/tags';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  tags: Tag[] = [];
  up: Boolean = true;
  constructor(private service: StationService) {
    this.tags = service.getTag();
    this.isUp();
  }

  getTagClass(index: number): string {
    switch (index) {
      case 1:
        return 'tag-1';
      case 2:
        return 'tag-2';
      case 3:
        return 'tag-3';
      case 4:
        return 'tag-4';
      default:
        return '';
    }
  }

  private isUp() {
    this.tags.forEach((tag, index) => {
      if (this.getTagClass(index + 1) === 'tag-2' || this.getTagClass(index + 1) === 'tag-4') {
        this.up = true;
      } else {
        this.up = false;
      }      
    });
  }
}

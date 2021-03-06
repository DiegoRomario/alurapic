import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: String = '';
  hasMore = true;
  currentPage = 1;
  userName: string;
  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos;
    });
  }


  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (photos.length === 0) {
          this.hasMore = false;
        }
      });
  }

}

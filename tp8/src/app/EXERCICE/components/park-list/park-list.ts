import { Component, inject } from '@angular/core';
import { ParkService } from '../../services/park-service';
import { RouterLink } from '@angular/router';
import { Park } from '../../../park';

@Component({
  imports: [RouterLink],
  selector: 'app-park-list',
  styleUrl: './park-list.css',
  templateUrl: './park-list.html',
})
export class ParkList {
  private readonly parkService = inject(ParkService);
  readonly parks = this.parkService.parks;

  ngOnInit(): void {
    this.parkService.getParks().subscribe();
  }

  deletePark(id: string): void {
    this.parkService.deletePark(id).subscribe();
  }

  likePark(park: Park): void {
    this.parkService.updatePark({ ...park, nbLikes: park.nbLikes + 1 }).subscribe();
  }
}

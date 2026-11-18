import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkService } from '../../services/park-service';
import { Park } from '../../../park';

@Component({
  imports: [],
  selector: 'app-park-selected',
  styleUrl: './park-selected.css',
  templateUrl: './park-selected.html',
})
export class ParkSelected {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly parkService = inject(ParkService);

  p = signal<Park | undefined>(undefined);

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.parkService.getParkById(id).subscribe((park) => this.p.set(park));
    }
  }
}

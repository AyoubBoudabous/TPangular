import { Routes } from '@angular/router';
import { ParkList } from './EXERCICE/components/park-list/park-list';
import { ParkSelected } from './EXERCICE/components/park-selected/park-selected';

export const routes: Routes = [
  {
    path: 'parks',
    title: 'park-list',
    component: ParkList,
  },
  {
    path: 'parks/:id',
    title: 'park-selected',
    component: ParkSelected,
  },

  {
    path: '',
    redirectTo: 'parks',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'error',
    component: Error,
  },
];

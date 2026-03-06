import { Routes } from '@angular/router';
import { Welcome } from './modules/home/welcome/welcome';
import { Dashboard } from './modules/dashboard/dashboard-home/dashboard-home';
import { MainLayout } from './layouts/main-layout/main-layout';


export const routes: Routes = [

  {
    path: '',
    component: Welcome
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth-module').then(m => m.AuthModule)
  },

  {
    path: 'main',
    component: MainLayout,
    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'vendors',
        loadChildren: () =>
          import('./modules/vendors/vendors-module').then(m => m.VendorsModule)
      },

  { path: 'items', loadChildren: () => import('./features/items/items-module').then(m => m.ItemsModule) },
  // other routes

{ path: 'categories', loadChildren: () => import('./features/categories/categories-module').then(m => m.CategoriesModule) }

    ]
  }

];
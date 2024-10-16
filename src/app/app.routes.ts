import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
    { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: '**', redirectTo: 'demo' }
];

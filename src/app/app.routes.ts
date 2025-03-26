import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/task-list/task-list.component').then(m => m.TaskListComponent)
    },
    {
        path: 'task/:id',
        loadComponent: () => import('./tasks/task-detail/task-detail.component').then(m => m.TaskDetailComponent)
    },
    {
        path: 'task/create',
        loadChildren: () => import('./tasks/task-create/task-create.component').then(m => m.TaskCreateComponent)
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'theme',
        loadChildren: () => import('./settings/theme-toggle/theme-toggle.component').then(m => m.ThemeToggleComponent)
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

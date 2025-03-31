import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'user-theme'
  private theme = signal<'light' | 'dark'>(this.loadTheme());

  get currentTheme(): Signal<'light' | 'dark'> {
    return this.theme;
  }

  toggleTheme() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    document.body.classList.add('theme-transition');
    setTimeout(() => document.body.classList.remove('theme-transition'), 300);
    this.theme.set(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem(this.themeKey, newTheme);
  }

  private loadTheme(): 'light' | 'dark' {
   return (localStorage.getItem(this.themeKey) as 'light' | 'dark') || 'light'
  }
}

import { Component, Signal, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  theme: Signal<'light' | 'dark'> = this.themeService.currentTheme;

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
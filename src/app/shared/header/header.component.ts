import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  theme = this.themeService.currentTheme;

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar-sistema',
  templateUrl: './navbar-sistema.component.html',
  styleUrls: ['./navbar-sistema.component.css'],
})
export class NavbarSistemaComponent {
  constructor(private authService: AuthService) {}

  isDropdownOpen = false;
  closeTimer: any;

  openDropdown() {
    this.isDropdownOpen = true;
    this.cancelCloseTimer();
  }

  startCloseTimer() {
    this.closeTimer = setTimeout(() => {
      this.isDropdownOpen = false;
    }, 500);
  }

  cancelCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }
  }

  logout() {
    this.authService.logout();
  }

  getCurrentUserName(): string {
    return localStorage.getItem('nomeCompleto') || '';
  }

  getMatricula(): string {
    return localStorage.getItem('matricula') || '';
  }

  getProfilePic(): string {
    return localStorage.getItem('fotoPerfil') || '';
  }

  isAdmin(): boolean {
    const roles = localStorage.getItem('roles');
    return !!roles && roles.includes('ROLE_ADMIN');
  }

  isUserClient(): boolean {
    const roles = localStorage.getItem('roles');
    const isUserClient = roles === 'ROLE_USER';
    const isAdmin = !!roles && roles.includes('ROLE_ADMIN');
    return isUserClient && !isAdmin;
  }

}

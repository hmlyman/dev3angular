import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: any = '';

  constructor(
    private profilesService: ProfilesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.profile = this.profilesService.userProfile;
    console.log(this.profilesService.userProfile);
    if (this.profile === undefined || this.profile === null) {
      this.router.navigate(['/member']);
    }
  }
}

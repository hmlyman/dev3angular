import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  search = '';
  searchZip = '';
  searchAge = '';
  searchCountry = '';
  members: any;
  constructor(
    private apiService: ApiService,
    private profilesService: ProfilesService
  ) {}

  ngOnInit() {
    this.apiService.get().subscribe((data) => {
      this.members = data.results;
      console.log(this.members);
    });
  }

  setMemberProfile(member: any) {
    this.profilesService.userProfile = member;
  }
}

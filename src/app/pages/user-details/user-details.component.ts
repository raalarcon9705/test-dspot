import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$ = this.usersService.selectedUser$;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usersService.getUserDetails(+id);
    }
  }

}

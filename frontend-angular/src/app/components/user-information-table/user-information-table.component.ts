import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserModule } from '../../models/user.module';

@Component({
  selector: 'app-user-information-table',
  templateUrl: './user-information-table.component.html',
  styleUrls: ['./user-information-table.component.css']
})
export class UserInformationTableComponent implements OnInit {
  @Input() userInfo: any[] = [];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((userInfo: UserModule[]) => {
      this.userInfo = userInfo;
    })
  }

  deleteUserButton (userId: string) {
    this.service.deleteUser(userId).subscribe(() => (
      this.ngOnInit()
    ));
  }
}

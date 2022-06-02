import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-information-inputs',
  templateUrl: './user-information-inputs.component.html',
  styleUrls: ['./user-information-inputs.component.css']
})
export class UserInformationInputsComponent implements OnInit {
  public name: string ='teste';
  public email: string = 'teste';
  public telephone: string = 'teste';
  public profession: string = 'teste';

  constructor(private service: UserService) { }

  ngOnInit(): void {}

  onSubmit() {
    const newUser = {
      name: this.name,
      email: this.email,
      telephone: this.telephone,
      profession: this.profession
    };

    this.service.postUser(newUser).subscribe(() => {
      this.reloadPage();
    });
  }

  reloadPage() {
    window.location.reload();
  }
}

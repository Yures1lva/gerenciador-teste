import { Component, OnInit } from '@angular/core';
import { User } from '../../../User';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent implements OnInit {

  allUsers: User[] = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((items) => {
      const data = items.data;
      this.allUsers = data
    })
  }

}

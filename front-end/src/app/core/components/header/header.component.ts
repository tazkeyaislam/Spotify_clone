import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input () userImg : string = '';
  navlist = ["Home", "TV Shows", "Movies", "New & Popular", "My list", "Browser by language"]

  constructor() { }

  ngOnInit(): void {
  }

}

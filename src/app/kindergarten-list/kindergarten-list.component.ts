import {Component, Input, OnInit} from '@angular/core';
import {Kindergarten} from '../model/Kindergarten';

@Component({
  selector: 'app-kindergarten-list',
  templateUrl: './kindergarten-list.component.html',
  styleUrls: ['./kindergarten-list.component.css']
})
export class KindergartenListComponent implements OnInit {

  @Input() public kindergartens: Kindergarten[];

  public constructor() {
  }

  public ngOnInit(): void {
  }

}

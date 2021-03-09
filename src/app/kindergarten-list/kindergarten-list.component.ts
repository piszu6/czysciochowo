import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Kindergarten, KindergartenResponse} from '../model/Kindergarten';

@Component({
  selector: 'app-kindergarten-list',
  templateUrl: './kindergarten-list.component.html',
  styleUrls: ['./kindergarten-list.component.css']
})
export class KindergartenListComponent implements OnInit {

  public kindergartens: Kindergarten[];

  public constructor(
    private apiService: ApiService
  ) {
  }

  public ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.apiService.getData().subscribe((response: KindergartenResponse) => {
      this.kindergartens = response.applications;
    });
  }

}

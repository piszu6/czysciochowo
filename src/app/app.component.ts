import {Component} from '@angular/core';
import {Kindergarten, KindergartenResponse} from './model/Kindergarten';
import {ApiService} from './api.service';

export interface AnalysisResult {
  position?: number;
  missingTo100?: number;
  over100?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public kindergartens: Kindergarten[];
  public analysisResult: AnalysisResult;

  public constructor(
    private apiService: ApiService,
  ) {
    this.apiService.getData().subscribe((response: KindergartenResponse) => {
      this.kindergartens = response.applications;
      this.recalculatePosition();
      this.analyse();
    });
  }

  private recalculatePosition(): void {
    this.kindergartens.forEach((kindergarten: Kindergarten, index: number, array: Kindergarten[]) => {
      if (index > 0) {
        array[index].position = array[index].votes === array[index - 1].votes ? array[index - 1].position : index + 1;
      } else {
        array[index].position = 1;
      }
    });
  }

  private analyse(): void {
    this.analysisResult = {};
    this.analysisResult.position = this.kindergartens.find((kindergarten: Kindergarten) => +kindergarten.applicationId === 1702).position;
    if (this.kindergartens.length >= 100) {
      if (this.analysisResult.position > 100) {
        this.analysisResult.missingTo100 = this.kindergartens[99].votes - this.kindergartens[this.analysisResult.position].votes;
      } else {
        this.analysisResult.over100 = this.kindergartens[this.analysisResult.position].votes - this.kindergartens[99].votes;
      }
    }
  }
}

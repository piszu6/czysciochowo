import {Component} from '@angular/core';
import {Kindergarten, KindergartenResponse} from './model/Kindergarten';
import {ApiService} from './api.service';

export interface AnalysisResult {
  missingTo100?: number;
  over100?: number;
  position?: number;
  votes?: number;
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
    const cogito = this.kindergartens.find((kindergarten: Kindergarten) => +kindergarten.applicationId === 2240);
    this.analysisResult = {};
    this.analysisResult.position = cogito.position;
    this.analysisResult.votes = cogito.votes;
    if (this.kindergartens.length >= 100) {
      if (this.analysisResult.position > 100) {
        this.analysisResult.missingTo100 = this.kindergartens[99].votes - this.analysisResult.votes;
      } else {
        this.analysisResult.over100 = this.kindergartens[this.analysisResult.position].votes - this.kindergartens[99].votes;
      }
    }
  }
}

import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AnalysisResult} from '../app.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnChanges {

  @Input() public analysisResult: AnalysisResult;

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {
    console.log(this.analysisResult);
  }

}

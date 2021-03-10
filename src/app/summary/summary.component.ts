import {Component, Input, OnInit} from '@angular/core';
import {AnalysisResult} from '../app.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() public analysisResult: AnalysisResult;

  public constructor() {
  }

  public ngOnInit(): void {
  }

}

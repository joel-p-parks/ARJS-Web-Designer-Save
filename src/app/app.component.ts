import { Component } from '@angular/core';
import { Observable, Subject } from "rxjs";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openReportSubj = new Subject<string>();
  openReportObs = this.openReportSubj as Observable<string>;
  designer: any;
  counter = 0;
  reportStorage = new Map();

  onSaveReport = (info: any) => {
    const reportId = info.id || `NewReport${++this.counter}`;
    this.reportStorage.set(reportId, info.definition);
    return Promise.resolve({ displayName: reportId });
  }

  onSaveAsReport = (info: any) => {
    const reportId = `NewReport${++this.counter}`;
    this.reportStorage.set(reportId, info.definition);
    return Promise.resolve({ id: reportId, displayName: reportId });
  }
}

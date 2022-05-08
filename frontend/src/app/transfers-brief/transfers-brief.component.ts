import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-transfers-brief',
  templateUrl: './transfers-brief.component.html',
  styleUrls: ['./transfers-brief.component.scss']
})
export class TransfersBriefComponent implements OnInit {

  view: any = [500, 200];

  colorScheme: Color = { domain: ['#D13608', '#D17808'], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', };

  trans: any = [];
  internals: any = [];

  width: number = 300;
  height: number = 100;

  constructor(private httpClient: HttpClient) { 
  }

  ngOnInit(): void {
    const url_trans = "http://127.0.0.1:5000/transfer_info"
    this.httpClient
      .get(url_trans)
      .subscribe(this.responseTransInfo,
                 err => console.error('Ops: ', err.message),
                 () => console.log('Completed Transaction Info'),
      );
    const url_internals = "http://127.0.0.1:5000/internals_info"
    this.httpClient
      .get(url_internals)
      .subscribe(this.responseInternalsInfo,
                 err => console.error('Ops: ', err.message),
                 () => console.log('Completed Transaction Info'),
      );
  }

  private responseTransInfo = (data: any): any => {
    this.trans = data
  }

  private responseInternalsInfo = (data: any): any => {
    this.internals = data
  }

}

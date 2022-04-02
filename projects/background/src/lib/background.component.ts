import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'animated-circle-background',
  template: `
    <ul class="circles" [ngStyle]="{'background-color': backgroundColor}">
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
      <li [ngStyle]="{'background-color': circleColor}"></li>
    </ul>

  `,
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  @Input() backgroundColor: string = '#202124';
  @Input() circleColor: string = '#FFFFFF33';

  constructor() { }

  ngOnInit(): void {

  }

}

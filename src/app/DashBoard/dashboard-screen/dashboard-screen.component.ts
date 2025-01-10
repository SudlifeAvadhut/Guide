import { Component,AfterContentInit , ViewChild, ElementRef } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import customerApiDoc from './customerAPI-1.0.json'

@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.css']
})
export class DashboardScreenComponent implements AfterContentInit  {
  @ViewChild('customerapidocumentation',{static: true}) custApiDocElement: ElementRef | undefined
  constructor() { }
  ngAfterContentInit(): void {
    debugger
    const apiDocumentation = customerApiDoc;
    const ui = SwaggerUI({
      spec: apiDocumentation,
      domNode: this.custApiDocElement?.nativeElement,
    })
  }
}

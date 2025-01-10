import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'SwaggerPortal';
  BrowserName : string;
  constructor(private router : Router){

  }
  ngOnInit(): void {
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);
  
   function disableF5(e : any) {
      if ((e.which || e.keyCode) == 116) e.preventDefault(); 
   };


   this.BrowserName = this.getBrowserName();
   if (this.BrowserName === '') {
     this.router.navigate(['/BrowserNotSupport']);
   }
  }


  public getBrowserName(): string {

    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return '';
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserNotSupportComponent } from './browser-not-support.component';

describe('BrowserNotSupportComponent', () => {
  let component: BrowserNotSupportComponent;
  let fixture: ComponentFixture<BrowserNotSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserNotSupportComponent]
    });
    fixture = TestBed.createComponent(BrowserNotSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

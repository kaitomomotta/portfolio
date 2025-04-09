import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvButtonComponent } from './cv-button.component';

describe('CvButtonComponent', () => {
  let component: CvButtonComponent;
  let fixture: ComponentFixture<CvButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalRightsComponent } from './legal-rights.component';

describe('LegalRightsComponent', () => {
  let component: LegalRightsComponent;
  let fixture: ComponentFixture<LegalRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalRightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

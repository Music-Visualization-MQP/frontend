import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAuthComponent } from './service-auth.component';

describe('ServiceAuthComponent', () => {
  let component: ServiceAuthComponent;
  let fixture: ComponentFixture<ServiceAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAuthComponent]
    });
    fixture = TestBed.createComponent(ServiceAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

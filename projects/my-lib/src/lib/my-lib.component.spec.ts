import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibComponent } from './my-lib.component';
import { MyLibService } from './my-lib.service';

fdescribe('MyLibComponent', () => {
  let component: MyLibComponent;
  let fixture: ComponentFixture<MyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibComponent ],
      providers: [
        MyLibService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

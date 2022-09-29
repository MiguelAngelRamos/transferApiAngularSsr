import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoIdComponent } from './photo-id.component';

describe('PhotoIdComponent', () => {
  let component: PhotoIdComponent;
  let fixture: ComponentFixture<PhotoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

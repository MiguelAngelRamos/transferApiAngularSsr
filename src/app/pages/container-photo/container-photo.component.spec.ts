import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPhotoComponent } from './container-photo.component';

describe('ContainerPhotoComponent', () => {
  let component: ContainerPhotoComponent;
  let fixture: ComponentFixture<ContainerPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

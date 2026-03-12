import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVideos } from './upload-videos';

describe('UploadVideos', () => {
  let component: UploadVideos;
  let fixture: ComponentFixture<UploadVideos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadVideos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadVideos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

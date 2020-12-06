import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConversionRomainePage } from './conversion-romaine.page';

describe('ConversionRomainePage', () => {
  let component: ConversionRomainePage;
  let fixture: ComponentFixture<ConversionRomainePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionRomainePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConversionRomainePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

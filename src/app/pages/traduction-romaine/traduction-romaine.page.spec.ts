import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraductionRomainePage } from './traduction-romaine.page';

describe('TraductionRomainePage', () => {
  let component: TraductionRomainePage;
  let fixture: ComponentFixture<TraductionRomainePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraductionRomainePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraductionRomainePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

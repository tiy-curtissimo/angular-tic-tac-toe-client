import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesUiComponent } from './games-ui.component';

describe('GamesUiComponent', () => {
  let component: GamesUiComponent;
  let fixture: ComponentFixture<GamesUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

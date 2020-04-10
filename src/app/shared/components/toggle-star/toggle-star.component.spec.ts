import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ToggleStarComponent } from './toggle-star.component';

describe('ToggleStarComponent', () => {
  let fixture: ComponentFixture<ToggleStarComponent>;
  let component: ToggleStarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToggleStarComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleStarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add marked class when isMarked value sets to true', () => {
    expect(component.isMarkedClass).toBeFalsy();

    component.isMarked = true;

    expect(component.isMarkedClass).toBeTruthy();
  });

  it('should change the title value according to the state', () => {
    expect(component.title).toBe('Добавить в избранное');

    component.isMarked = true;

    expect(component.title).toBe('Убрать из избранного');
  });

  it('should make title empty when corresponding flag is set', () => {
    expect(component.title).toBe('Добавить в избранное');

    component.useTitle = false;

    expect(component.title).toBe('');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCrud } from './todo-crud';

describe('TodoCrud', () => {
  let component: TodoCrud;
  let fixture: ComponentFixture<TodoCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

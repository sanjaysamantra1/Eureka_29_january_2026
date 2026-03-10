import { PipesDemo } from './../pipes-demo/pipes-demo';
import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectiveDemo } from '../directive-demo/directive-demo';
import { ProductList } from '../product-list/product-list';
import { Parent } from '../parent/parent';
import { UserList } from '../user-list/user-list';
import { Products } from '../products/products';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { TodoList } from '../todo-list/todo-list';
import { TodoAdd } from '../todo-add/todo-add';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateForm } from '../template-form/template-form';
import { ModelDrivenForm } from '../model-driven-form/model-driven-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    // DirectiveDemo
    // ProductList
    // PipesDemo
    // Parent
    // UserList
    // Products
    // CommentList
    // EmployeeList
    // ObservableDemo1
    // ObservableDemo2
    // SubjectDemo1
    // TodoList,
    // TodoAdd
    // SignalDemo1,
    // SignalDemo2
    // FormDemo1
    // TemplateForm
    // ModelDrivenForm
    DynamicForm
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}

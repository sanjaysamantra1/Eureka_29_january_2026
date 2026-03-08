import { PipesDemo } from './../pipes-demo/pipes-demo';
import { Component } from '@angular/core';
import { DataBinding } from "../data-binding/data-binding";
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
    TodoList,
    TodoAdd
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}

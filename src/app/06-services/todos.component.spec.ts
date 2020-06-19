import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";

describe("TodosComponent", () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  let todos = [1, 2, 3];

  it("Should set todos propertty the item retunerd from services", () => {
    spyOn(service, "geTodos").and.callFake(() => {
      return Observable.from([todos]);
    });
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });
  it("Should to save the changes when a new todo item is added", () => {
    let spy = spyOn(service, "add").and.callFake((t) => {
      return Observable.empty();
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });
  it("Should add the new todo retune from the servcver", () => {
    let todo = { id: 1 };
    let spy = spyOn(service, "add").and.returnValue(
      Observable.from([{ todo }])
    );

    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(1);
  });
  it("Should set the message property if server return an error when adding new todo", () => {
    let error = "error";
    let spy = spyOn(service, "add").and.returnValue(Observable.throw(error));

    component.add();
    expect(component.message).toBe(error);
  });
  it("Should to delte the server to delete a todo item id the use confiirm", () => {
    spyOn(window, "confirm").and.returnValue(true);
    let spy = spyOn(service, "delete").and.returnValue(Observable.empty());

    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
  it("Should NOT delte the server to delete a todo item id the use cansel", () => {
    spyOn(window, "confirm").and.returnValue(false);
    let spy = spyOn(service, "delete").and.returnValue(Observable.empty());

    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
});

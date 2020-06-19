import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder);
  });

  it('should cre3te a from with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy()
    expect(component.form.contains('email')).toBeTruthy()
  });

  it('shold make the name control requeired', () => {
    let control = component.form.get('nanme');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
// angular radi na principu componenti, componente mogu biti reusable .. (componenta se sastoji od: data, html template and logic)

// 1. Create a component
// 2. Register it in a module
// 3. Add an element in an Html markup

// second way of making component
// throught vsc terminal 
// ng g c nameofcomponent -> angular add 5 files .css html spec.ts and td and module.ts


import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: '<h1>Hello, World!</h1>',
  styles: ['h1 { color: red; }']
})
export class MyComponent {
  // component logic goes here
}

This component defines a simple UI element that displays the text "Hello, World!" in red. The component has three parts:

1.The @Component decorator, which defines the component's metadata and tells Angular how to create and use the component. The selector property specifies the name of the HTML element that represents the component, and the template and styles properties define the component's UI and styles, respectively.

2.The MyComponent class, which contains the component's logic and properties. In this example, the class is empty, but you can add methods and properties to the class to define the component's behavior.

3.The component's HTML template, which is defined as a string in the template property of the @Component decorator. The template uses Angular's template syntax to bind data to the component's properties and to define how the component should render.


To use this component in your application, you would include the app-my-component element in your HTML template:

<app-my-component></app-my-component>


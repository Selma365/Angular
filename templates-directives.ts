Templates are an important part of Angular because they define the UI of your application. 
They contain the HTML elements, directives, and binding expressions that make up the UI, and they determine how the UI will look and behave.


Templates can also contain directives, which are special markers that tell Angular to apply logic to a part of the template.
For example, the *ngFor directive tells Angular to repeat a section of the template for each item in an array:
templates:
<ul>
  <li *ngFor="let item of items">{{item}}</li>
</ul>

This template will render a list of items by repeating the <li> element for each item in the items array.

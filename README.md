# Angular Dynamic Button

## About the project
>The application features a reusable dynamic button component that allows complete customization of style, size, and behavior. This button can be configured through properties that can be adjusted in different parts of the system, ensuring visual and functional consistency. The component supports CSS customization, various sizes, and the binding of events such as clicks and keyboard interactions. Additionally, it is responsive and accessible, ensuring a good user experience across various devices and for people with different special needs.

## Main technologies used in the project
>* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

**Page grid example**

~~~html
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>Page title</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p>First container</p>
    </div>
    <div class="col">
      <p>Second container</p>
    </div>
  </div>
</div>
~~~

## Modularization
>The whole project is modularized, each component has its own module, in the `app.module.ts`
> file only the main modules are imported. Shared modules are created in the `Shared`
> folder and only called when needed, this avoids extra initial loading and endless module imports in the main system file.

## File name pattern
| Name rule      | Name pattern                                                    |
|:---------------|:----------------------------------------------------------------|
| Simple name    | `name.ts` / `name.html` / `name.css`                            |
| Compound name  | `compound-name.ts` / `compound-name.html` / `compound-name.css` |
| Directive name | `name.directive.ts` / `compound-name.directive.ts`              |
| Service name   | `name.service.ts` / `compound-name.service.ts`                  | 
| Model name     | `name.model.ts` / `compound-name.model.ts`                      | 
| Guard name     | `name.guard.ts` / `compound-name.guard.ts`                      | 

>To learn more about creating new items, click on the link: [Angular generate](https://angular.io/cli/generate)

## How to clone and setup up the project
> - [x] Clone the project, use de code: `git clone <project-url>` to clone the project.
> - [x] Install npm packages, use de code: `npm i` to install the packages.
> - [x] Run the project, use de code: `npm start` to run the project.

## Development server
> Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Preview app
![image](https://github.com/Jhoncosta08/angular-dynamic-button/blob/main/src/assets/preview-one.png)


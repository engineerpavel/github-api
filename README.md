# GithubApi тестовое задание

Необходимо реализовать 3-х страничный проект, который будет в себя включать реализацию
связи с GitHub Api (https://api.github.com). Верстку страниц рекомендуется выполнять с помощью
Bootstrap.
1. Страница ‘blocks’.  
   Необходимо создать страницу, на которой булет находиться строка поиска и кнопка ‘Search’.
   После введения значения для поиска и нажатия на кнопку, необходимо сделать соответсвующий
   запрос на GitHub Api и вывести первые 20 результатов в блочном списке ниже строки поиска.
2. Страница ‘table’.  
   Необходимо создать страницу с такой же реализацией поиска, но для списка выведения данных
   использовать табличную разметку.
3. Страница ‘detail’.  
   Необходимо создать страницу с детальной информацией пользователя. Переход на страницу
   должен осуществляться по клику на пользователя в списках результатов поиска на страницах
   ‘blocks’ и ‘table’. На странице должны выводиться такие данные: аватар, логин, тип пользователя,
   ссылка на профиль.
4. Навигация по проекту.  
   Реализовать навигацию вверху страниц и добавить ссылки на страницы ‘blocks’ и ‘table’.  


   *** Дополнительное задание (необязательное)***
5. Реализация авторизации.  
   Необходимо реализовать страницу авторизации пользователя с помощью Firebase
   (https://firebase.google.com/). Реализовать авторизацию по email и по GitHub пользователю. Если
   пользователь не авторизирован, у него не должно быть доступа к другим страницам проекта. Если
   пользователь авторизирован у него в блоке навигации должны отображаться следующие данные:
   логин, аватар, выпадающий список с функцией ‘Log out’.

# GithubApi test task
Implement a 3-page project that will include the implementation of the GitHub Api 
communication (https://api.github.com). It is recommended to do page layout using Bootstrap.
1. The 'blocks' page.  
   Create a page with a search bar and a ‘Search’ button.
   After entering the value for search and clicking on the button, you need to make a corresponding 
   request to the GitHub Api and display the first 20 results in the block list below the search bar.
2. The 'table' page.  
   Create a page with the same search implementation, but use table markup for the output list.
3. The 'detail' page.  
   Create a page with detailed user information. The transition to the page should be carried out by clicking 
   on the user in the search results lists on the ‘blocks’ and ‘table’ pages. The following data 
   should be displayed on the page: avatar, login, user type, link to the profile.
4. Navigation through the project.  
   Implement navigation at the top of the pages and add links to the 'blocks' and 'table' pages.


   *** Additional assignment (optional) ***
6. Authorization implementation.
   Implement a user login page with Firebase (https://firebase.google.com/). 
   Implement authorization by email and GitHub to the user. If the user is not logged in, 
   he should not have access to other pages of the project. If the user is authorized in his navigation block, 
   the following data should be displayed: login, avatar, drop-down list with the ‘Log out’ function.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

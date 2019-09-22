assisnment 2
This project was generated with Angular CLI version 8.1.2.

Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

serve
Run ng serve to build the project. The build artifacts will be stored in the dist/ directory.

Running unit tests
Run ng test to execute the unit tests via Karma.

Running end-to-end tests
Run ng e2e to execute the end-to-end tests via Protractor.

Mongodb

MongoDB is a database designed for scalability, high performance and high availability. It scales from a single server deployment to a large, complex multi-data center architecture. Utilizing the advantages of in-memory computing, MongoDB provides high-performance data reading and writing. MongoDB's native replication and automatic failover capabilities give your applications enterprise-class reliability and operational controls.

Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI README.



There are four parts, as follows:



1234

Main components



This component is responsible for user login.





Navigation component



Navigation component is a static component that controls the routing of home, chat, and admin components.





Chat component



Chat page, add users, add users into groups and delete. The most important thing is the chat function.





Management component



This component bears the management dashboard. SuffAdmin users can add and delete users or groups on this page.





User routing



/API/AUTH



"Auth" routing is used to authorize users at login time. This is achieved by obtaining parameters * username * and password * from the login form on the home page.





/API/RG



This route is used to manage user registration. It is implemented by entering the following parameters in the admincomponent user registration form: user name, e-mail and role.





/API/DEL



This route is used to delete user data in the check form. It exists in userdata. json. If matched, it can be deleted.





/API/ users



This routing is for past users to start with userdata. jason. No special parameters are required for this route. It only needs to send a request to return user data.





Group route



/ API/Group Registration



This routing user adds user groups. Enter the name entered in the form into groupdata. Jason and save it.





/API/ group



This routing user deletes user groups. Check whether the input in the form matches, and if it matches, it can be deleted.





Group /API/



This routing user reads the data in GroupData. This routing does not require special parameters, but only sends a request to it to return user data.

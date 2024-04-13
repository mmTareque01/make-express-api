
# Make-Express-API

    **********{ make-express-api }**********
"make-express-api" is a cli tool which help back-end developers to generate express api faster. By writing a single line of code, developer will be able to create CRUD api for a specific module. This tool not only will generate the API, it will take care of proper folder structure as well as versioning system.  By default the rest api is designed by following "Rechardson standard level". Right now user won't be able to change it whether they are rewriting the api response.


## Contribute

This is an open source project. Anybody can contribute with this project. If any of you want to contribute with this project to help express developer community, you guys are welcome.

- [Github](https://github.com/mmTareque01/make-express-api)

## Authors
Hi, I am Muhimenul Tareque, who developed the entire system inspired by RoR scaffold system. To know more you can visit the link bellow. Thank you.

- [@Github](https://github.com/mmTareque01)
- [@LinkedIn](https://linkedin.com/in/mmtareque)
- [@whatsapp](https://wh.com)
- [@website](https://mmtareque.com)


## How to use
It is very simple to use this application. To use this application just follow the instructions mentioned bellow:

- Download the package within your express project
```shell
npm i make-express-api
```
- Create a config file called ```scaffold.config.js``` at root directory of your project.
- Add the following option into the config file.
```
module.exports = {
    language: "js", // value=> js
    folders: {
        route: "routes", // routig folder name
        controller: "controllers", // controller folder name
        service: "repositories" //service folder name
    }

};

```

- If you done the step written above, you are good to make api's using ```make-exp-api``` app.
- Open your terminal and run the following command from the root of the project directory. ```create-scaffold -v <version> -m <module_name>```
Example: ``` create-scaffold -v v1 -m books```




## Limitations

The application has some limitations, as you are going to use this, you should keep it mind:

- Till now, the application only able to create CRUD for a module.
- You won't abe to create a single api.
- If already exist any module wihtin the same, the existing one will be replaced.


## Next Version
The upcoming Version will solve the current limitations.
Like:
- Developer wll be able to create a single api's;
- Developer will be able to generate custom structure;
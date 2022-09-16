# Backend-Musica


## Envinroment setup

1) Crear database
2) Sobreescribir .env.example a .env, agregar las credenciales

Instalar dependencias
``` bash
npm install
```

3) Correr las Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Correr los Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Iniciar el servidor local

``` bash
npm start
```
## Swagger


####  http://localhost:${PORT}/api/doc/

## Credenciales
### Admin:
##### - Email: admin@test.com 
##### - Password: 123
### User:
##### - Email: user@test.com 
##### - Password: 123
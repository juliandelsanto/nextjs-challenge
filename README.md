# Pokédex en Next.js

Este proyecto es un Pokédex desarrollado con Next.js 14.

## Descripción

El Pokédex permite a los usuarios explorar y buscar información sobre diferentes Pokémon. Proporciona detalles como el nombre, la imagen, el peso y las estadísticas de cada Pokémon.

## Características

- Lista de Pokémon: muestra una lista paginada de Pokémon.
- Detalles de Pokémon: al hacer clic en un Pokémon, se muestra una página con detalles como la imagen, el peso y las estadísticas.
- Autenticación de usuarios: utiliza Auth0 para permitir que los usuarios se autentiquen y accedan a ciertas funcionalidades.

## Tecnologías utilizadas

- Next.js: para la creación de la aplicación web.
- React: para la construcción de la interfaz de usuario.
- Tailwind CSS: para el diseño y estilizado.
- PokeAPI: para obtener los datos de los Pokémon.
- Auth0: para la autenticación de usuarios.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Copia el archivo `.env.example` a `.env` y completa la configuración de las variables de entorno necesarias.

## Configuración de variables de entorno

Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

AUTH0_SECRET = ''
AUTH0_BASE_URL = ''
AUTH0_ISSUER_BASE_URL =''
AUTH0_CLIENT_ID = ''
AUTH0_CLIENT_SECRET = ''

POKEAPI_URL = https://pokeapi.co/api/v2

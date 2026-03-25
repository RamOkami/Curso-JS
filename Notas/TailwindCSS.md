# TAILWIND CSS

## TAILWIND CSS EN CDN
* IMPORTANTE: La version de Tailwind CDN es unicamente para propositos de 
development, **No se deberia utilizar para produccion**.

### CODIGO
```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- SCRIPT PARA APLICAR TAILWIND CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <!-- HOJA DE ESTILOS CSS PARA TAILWIND -->
    <link rel="stylesheet" href="input.css">

</head>
<body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
</body>
</html>
```

* En Tailwind 4.0 en adelante se ocupa input.css para inicializar las funciones de este mismo.

### CODIGO CSS
```css
@import "tailwindcss";
```

* NOTA: Tambien es recomendable instalar la extension **Tailwind CSS IntelliSense**
para tener las funciones de recomendacion.

## INSTALAR TAILWIND PARA PRODUCCION

Para instalar y utilizar todos los contenidos de Tailwind en la version de produccion de la pagina web se tienen que seguir los siguientes pasos.

### 1. Instalacion
```
npm install tailwindcss @tailwindcss/cli
```

### 2. Creacion de hoja de estilos output.css
```
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

### 3.
```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./output.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
</body>
</html>
```
Se elimina el script CDN de Tailwind y se hace referencia al nuevo archivo que se creo output.css.
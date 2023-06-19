# Pokemon API

Hämtar data från PokeAPI och skickar tillbaka till klienten. Där går det bläddra
eller söka efter pokemons. Du kan spara pokemons lokalt och även ta bort dessa
från din lokala databas.

## Installation

Följande steg hjälper dig att installera och köra projektet.

1. Först behöver du klona detta repo till din lokala maskin. Använd följande
   kommando i din terminal:

```bash
git clone <github-repo-url>
```

2. Navigera till projektets mapp:

```bash
cd <project-directory>
```

3. Installera alla nödvändiga paket med följande kommando:

```bash
npm install
npm install -g sass (om du inte har sass installerat)
```

## Kompilera och Kör Projektet

För att kompilera och köra projektet, använd följande kommando:

```bash
sass scss/style.scss css/style.css
npx tsc

Efter detta går det starta via tex live server eller liknande.
```

## Projektstruktur

Här är en grundläggande förklaring av projektets huvudmappar och filer:

-   `src/` - Här är ts-filen som används för att skapa servern.
-   `scss/` - Här är sass-filen som används för att skapa css-filen.
-   `dist/` - Här är index.js som används för att köra servern.
-   `css/` - Här är css-filen som används för att styla sidan.
-   `README.md` - Denna fil du läser just nu.

## API

Detta projekt använder [PokeAPI](https://pokeapi.co/). Det huvudsakliga
slutpunkten som används är:

```
https://pokeapi.co/api/v2/pokemon/{id_or_name}
```

## Använda Teknologier

Detta projekt är skrivet i TypeScript och använder följande teknologier:

-   Node.js - För server-sidan.
-   Express - Ett ramverk för att bygga webbapplikationer på Node.js.
-   PokeAPI - Används för att hämta data om Pokemon.
-   Sass - Ett ramverk för att skriva CSS.

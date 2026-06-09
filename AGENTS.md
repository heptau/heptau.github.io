# apps.80.cz — rozcestník projektů

Tento repozitář hostuje statický web na **GitHub Pages** ze složky `docs/`.
Doména: [apps.80.cz](https://apps.80.cz)

## Struktura

```
/
├── CNAME              # vlastní doména (apps.80.cz)
├── AGENTS.md          # tento soubor
├── index.html         # starý redirect (lze smazat, GitHub Pages čte z docs/)
└── docs/
    ├── index.html     # hlavní stránka – rozcestník s ikonami
    ├── style.css      # styly s podporou světlého/tmavého režimu
    ├── script.js      # JS – automatické přepínání motivu dle systému
    └── icons/         # favicony stažené z jednotlivých webů
        ├── pgarachne.png
        ├── omnidb.png
        ├── sqlfluffui.png
        ├── pg_dbml.svg
        ├── pg_atropos.svg
        ├── typolima.png
        ├── compound-interest-calculator.png
        ├── odorik-dash.png
        ├── odorik.png
        └── qr-generator.png
```

## Kategorie

Projekty jsou rozděleny do tří sekcí:

### CLI nástroje
| Název | URL | Popis |
|---|---|---|
| pgArachne | <https://www.pgarachne.com> | Prohlížeč a editor PostgreSQL databází v terminálu |
| pgDBML | <https://pg_dbml.80.cz> | Generátor DBML diagramů z PostgreSQL schématu |
| pgAtropos | <https://pg_atropos.80.cz> | Analyzátor výkonu a struktury PostgreSQL |
| Typolima | <https://typolima.80.cz> | CLI kontrola překlepů v českých textech |

### GUI aplikace
| Název | URL | Popis |
|---|---|---|
| OmniDB | <https://www.omnidb.net> | GUI pro správu a editaci PostgreSQL databází |
| SQLFluff UI | <https://sqlfluffui.80.cz> | GUI nad SQLFluff linterem pro SQL soubory |

### Webové aplikace
| Název | URL | Popis |
|---|---|---|
| Compound Interest Calculator | <https://compound-interest-calculator.80.cz> | Online kalkulačka složeného úroku |
| Odorik Dash | <https://odorik-dash.80.cz> | Dashboard pro monitoring Odorik kreditu |
| Odorik | <https://odorik.80.cz> | Webová správa Odorik VoIP služeb |
| QR Generator | <https://qr-generator.80.cz> | Online generátor QR kódů |

## Přidání nového projektu

1. Stáhni favicon do `docs/icons/` (např. `curl -Lo docs/icons/mujprojekt.png https://mujprojekt.80.cz/favicon.png`)
2. Přidej novou sekci nebo přidej položku do existující sekce v `docs/index.html`
3. Pokud favicon nejde stáhnout, použij <https://www.google.com/s2/favicons?domain=DOMENA&sz=64>
4. Pokud není k dispozici žádná favicon, vytvoř SVG placeholder

## Vývoj

Pro lokální testování stačí otevřít `docs/index.html` v prohlížeči.
GitHub Pages automaticky nasazuje ze složky `docs/` při pushi do `main`.

## Design

- Ikonky na způsob iOS/desktop home screen – grid s kolečky/zaoblenými čtverci
- Automatické přepínání světlého/tmavého režimu dle `prefers-color-scheme`
- Responzivní – na mobilu menší ikony
- Žádné externí závislosti (čisté HTML + CSS + JS)

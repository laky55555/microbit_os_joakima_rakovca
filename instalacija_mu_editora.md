# Instalacija mu editora

## Opcenito o Mu editoru

Mu je jednostavan uredivac koda za micropython. Jos je u razvoju pa ima bugova (gresaka) ali radi prilicno dobro. Odlican je za koristenje s micro:bitom jer omogucuje:

1. Provjeru ima li gresaka u kodu pritiskom na tipku **Check**

1. Automatski flash (stavljanje novog) koda na micro:bit pritiskom na tipku **Flash**, nije potrebno preuzeti kod i kopirati ga na micro:bit.

1. Programiranje micro:bita "uzivo", tj. kako pisete komande one se izvrsavaju na mikro:bitu pomocu **REPL** (read-eval-print-loop).

## Instalacija na Windows 7/8/10

1. (Neobavezno ali **vrlo** korisn) Da bi REPL radio potrebno je instalirati upravljacke programe za njega.

    1. [Link na stranicu](https://os.mbed.com/handbook/Windows-serial-configuration) i instrukcije za instalaciju, te link na [**posljednju verziju**](https://os.mbed.com/media/downloads/drivers/mbedWinSerial_16466.exe) upravljackog programa (drivera).

    1. Prije instalacije programa potrebno je prikljuciti micro:bit pomocu USB-kabela na racunalo i **zatvoriti sve programe** osim mjesta gdje se instalacija nalazi.

    1. Pokrenuti instalaciju i kliknuti DA/INSTALIRAJ na sva pitanja.

1. Preuzeti program sa [stranice](https://codewith.mu/) gdje se nalazi i opis programa. Posljednja verzija za vrijeme pisanje je 0.9.13 i mozete je preuzeti direktno [**klikom ovdje**](https://github.com/mu-editor/mu/releases/download/v0.9.13/mu-0.9.13.win.exe) i pokrenuti.

1. Napomena - ako REPL ne radi, ili ne radi ispravno pokusajte slijedece:
    1. Iz Mu programa klikom na *Flash* tipku staviti novi (bilo koji) program na micro:bit i pokusati ponovno.

    1. Izvaditi micro:bit iz racunala i ponovno ga spojiti.

    1. Ponovno napraviti korak 1 instalacije.

    1. Ako je REPL prije radio a sada vise ne radi pokusajte promijeniti USB port (mjesto na koje spajate micro:bit na racunalo) na koji je USB kabel spojen. Ako ni to ne uspije pokusajte ponovno napraviti kod koraka *3 Napomena* prvi zadatak.

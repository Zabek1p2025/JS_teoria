# Zadanie Sprawdzające 1: Lista w Odwrotnej Kolejności (Grupa 2)

## Treść zadania

Napisz skrypt, który zbierze od użytkownika trzy wpisy i wyświetli je **w odwrotnej kolejności** (ostatni wpis jako pierwszy na liście).

Aplikacja powinna:

1. Poprosić użytkownika o podanie **trzech** dowolnych elementów (np. imion, tytułów – użyj okna dialogowego do wprowadzania danych trzy razy lub w pętli).
2. Zapisać je w jednej tablicy (w kolejności wpisania).
3. **Odwrócić** kolejność elementów w tablicy odpowiednią metodą albo pętla od końca).
4. Wyświetlić listę na stronie w formacie: `1. [trzeci wpis], 2. [drugi], 3. [pierwszy]` – czyli w kolejności odwrotnej niż wpisywanie.

## Wskazówki

- Zacznij od pustej tablicy i zbieraj wpisy użytkownika w jednej strukturze.
- Odwrócenie tablicy możesz zrobić metodą `reverse()` (zmienia tablicę na miejscu) albo budować wyświetlanie w pętli od indeksu `length - 1` w dół do 0.
- Przy numeracji 1., 2., 3. pamiętaj o rozróżnieniu indeksu (0, 1, 2) i numeru wyświetlanego.

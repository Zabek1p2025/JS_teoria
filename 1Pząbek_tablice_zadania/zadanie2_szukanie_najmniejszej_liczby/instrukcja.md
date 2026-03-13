# Zadanie Sprawdzające 2: Szukanie Najmniejszej Liczby (Grupa 2)

## Treść zadania

Napisz skrypt, który:

1. Zapyta użytkownika o **zakres liczb** do losowania:
   - "Podaj najmniejszą liczbę (min)"
   - "Podaj największą liczbę (max)"
2. Wylosuje **10** liczb całkowitych z podanego zakresu (min–max włącznie) i zapisze je w tablicy.
3. Wyświetli wylosowaną tablicę.
4. Przejdzie przez tablicę pętlą i znajdzie **najmniejszą** liczbę (nie używaj `Math.min(...tablica)` – napisz własny algorytm z pętlą).
5. Wyświetli znalezioną najmniejszą wartość.

## Wskazówki

- Wartości z `prompt` są tekstem – do obliczeń i porównań potrzebujesz liczb.
- Losowanie z przedziału [min, max] wymaga użycia `Math.random()` oraz zaokrąglenia; uwzględnij, że max ma być włącznie.
- Najmniejszą wartość w tablicy możesz znaleźć w pętli, pamiętając „dotychczasowe minimum” i porównując z kolejnymi elementami.

# Zadanie Sprawdzające 6: Rozdzielanie Liczb – Dodatnie i Ujemne (Grupa 2)

## Treść zadania

Napisz program, który wylosuje liczby z podanego zakresu i rozdzieli je na dwie grupy: **nieujemne** (≥ 0) oraz **ujemne** (< 0).

1. Zapytaj użytkownika o **zakres liczb** do losowania:
   - "Podaj liczbę początkową (min)" (np. -15)
   - "Podaj liczbę końcową (max)" (np. 15)
2. Wylosuj **20** liczb z tego zakresu i zapisz je w tablicy `liczby`.
3. Przygotuj dwie puste tablice: `dodatnie` (w tym zero: ≥ 0) oraz `ujemne` (< 0).
4. Przejdź pętlą przez tablicę `liczby`:
   - Jeśli liczba jest **większa lub równa 0**, dodaj ją do tablicy `dodatnie`.
   - W przeciwnym razie dodaj ją do tablicy `ujemne`.
5. Wyświetl wszystkie trzy tablice (wylosowane, dodatnie, ujemne) w czytelny sposób.

## Wskazówki

- Losowanie z przedziału [min, max] (włącznie) wymaga `Math.random()` i zaokrąglenia.
- Warunek „nieujemne” to np. `liczba >= 0`; „ujemne” to `liczba < 0`.
- Elementy do tablic `dodatnie` / `ujemne` dodajesz po sprawdzeniu warunku w pętli.

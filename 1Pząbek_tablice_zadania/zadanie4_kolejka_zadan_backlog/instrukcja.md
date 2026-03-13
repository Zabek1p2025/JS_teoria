# Zadanie Sprawdzające 4: Kolejka Zadań – Backlog (Grupa 2)

## Treść zadania

Napisz skrypt symulujący prosty backlog (kolejkę zadań do zrobienia w projekcie).

1. Stwórz tablicę `zadania` z czterema gotowymi nazwami zadań: `["Analiza", "Projekt", "Kod", "Testy"]`.
2. Wyświetl aktualną listę zadań na stronie.
3. Usuń **drugie** zadanie z listy (indeks 1 – czyli "Projekt") za pomocą odpowiedniej metody.
4. Zapytaj użytkownika: "Jakie nowe zadanie dodać na koniec kolejki?".
5. Dodaj odpowiedź użytkownika na **koniec** tablicy.
6. Wyświetl zaktualizowaną listę zadań.
7. Wyświetl informację: "W kolejce jest teraz X zadań".

## Wskazówki

- Usunięcie jednego elementu o danym indeksie możesz zrobić metodą, która przyjmuje indeks i liczbę elementów do usunięcia.
- Liczba elementów tablicy jest dostępna we właściwości `length`.

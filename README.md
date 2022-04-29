# Test 1

## Cerinte

1. Listeaza toate produsele returnate de acest API - http://private-32dcc-products72.apiary-mock.com/product, ordonate dupa pret, descrescator.

   - Fiecare produs trebuie sa aiba un buton de `Add to cart`
   - `USD` este currency-ul default

2. Produsul adaugat in cart este sters din lista de la punctul 1 si are urmatoarele elemente:
   - Cantitate editabila
   - Descriere in pop-up, asa cum este afisat in [mockup](mockups/test-interview-3.jpg)
   - Pretul este cel total per produs (pretul returnat de `API * cantitate`)
   - Buton de remove sterge produsul din cart si il re-adauga in lista
     - Atunci cand un produs este re-adaugat in lista, ordonarea de la punctul 1 trebuie sa se pastreze

Stack-ul folosit este la alegerea ta. Poti folosi orice librarie / framework de CSS si JS.

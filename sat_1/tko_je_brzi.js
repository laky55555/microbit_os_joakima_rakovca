let igracB = 0
let igracA = 0
// Ako je gumb A pretisnut povecamo broj koji pamti
// koliko puta je gumb A pretisnut
input.onButtonPressed(Button.A, () => {
    igracA += 1
})
// Ako je gumb B pretisnut povecamo broj koji pamti
// koliko puta je gumb B pretisnut
input.onButtonPressed(Button.B, () => {
    igracB += 1
})
// Ako su gumb A i B pretisnuti povecamo oba broja
// koja pamte koliko puta su gumbi pretisnuti
input.onButtonPressed(Button.AB, () => {
    igracB += 1
    igracA += 1
})
// Postavimo na pocetak da je gumb A stisnut 0 puta
igracA = 0
// Postavimo na pocetak da je gumb B stisnut 0 puta
igracB = 0
// Cekamo 10 sekundi da se igrica zavrsi
basic.pause(10000)
// Ispisemo rezultat
basic.showString("Rezultat:  ")
basic.showString("igrac A ->")
// Ispisemo koliko je gumb A puta bio pretisnut
basic.showNumber(igracA)
basic.showString("igrac B ->")
// Ispisemo koliko je gumb B puta bio pretisnut
basic.showNumber(igracB)


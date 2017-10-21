from microbit import *

# Postavimo rezultat oba igraca na 0
igrac_A = 0
igrac_B = 0

# Cekamo 10 sekundi
sleep(10000)

# Stavimo da je igrac_A broj koliko je tipka a stisnuta i isto za b
igrac_A = button_a.get_presses()
igrac_B = button_b.get_presses()

# Ispisemo Igrac A:
display.scroll('Igrac A:')
# Ispisemo broj igrac_A
display.scroll(str(igrac_A))

display.scroll('Igrac B:')
display.scroll(str(igrac_B))

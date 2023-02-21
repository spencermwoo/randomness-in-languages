X = 10
N = 1000000000
filename = f'bash_{X}_{N}'

with open(filename) as file:
    for line in file:
        items = line.split(" ")

        for i, item in enumerate(items):
            l = f'{i}:{float(float(item)/N)}'
            print(l)
lines = [line.strip() for line in open('../input.file')]

calories = 0
caloriesTotal = []

for line in lines:
  if line != '':
    calories += int(line)
  else:
    caloriesTotal.append(calories)
    calories = 0

caloriesTotal.sort(reverse=True)

print('Part 1: ' + str(caloriesTotal[0]))
print('Part 2: ' + str(sum(caloriesTotal[:3])))
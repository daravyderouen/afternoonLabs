import matplotlib.pyplot as plt

cupcakeInvoices = open("cupcakeInvoices.csv")

print(cupcakeInvoices)#<<just a list

#loop through all of the data and print each row
for name in cupcakeInvoices:
    print(name)#<<print every single line

#cupcakeInvoices.close()


cupcakeInvoices = open("cupcakeInvoices.csv")

for cupcake in cupcakeInvoices:
    print(cupcake)

cupcakeInvoices.close()


cupcakeInvoices = open("cupcakeInvoices.csv")

for cupcake in cupcakeInvoices:
    type=cupcake.split(",")
    print(type[2])#for index 2 it spits it

cupcakeInvoices.close()

cupcakeInvoices = open("CupcakeInvoices.csv")

for cupcake in cupcakeInvoices:
    type=cupcake.split(",")
    total = int(type[3])*float(type[4])
    print(total)

cupcakeInvoices.close()

cupcakeInvoices = open("CupcakeInvoices.csv")

total =0
for cupcake in cupcakeInvoices:
    type=cupcake.split(",")
    total = total + (int(type[3])*float(type[4]))
    print(total)

plt.title("Cupcakes Sold")

x = int(type[3])
y = float(type[4])

plt.plot(x,y)

plt.ylabel('Number of Cupcakes Sold')
plt.xlabel('Different Flavors of Cupcakes')

plt.show()

cupcakeInvoices.close()
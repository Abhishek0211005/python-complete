Abhi = int(input("enter the number:"))

for i in range(2, Abhi):
    if(Abhi%i) == 0:
        print("this is not prime number")
        break 
else:
    print("this is a prime number")

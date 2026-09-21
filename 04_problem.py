word = "Donkey"

with open("file.txt", "r")as f:
    hello = f.read()

Abhis = hello.replace(word, "######")

with open("file.txt", "w")as f:
    f.write(Abhis)
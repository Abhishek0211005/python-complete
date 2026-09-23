words = ["Donkey", "bad","saale tu"]

with open("myfile.txt", "r") as f:
    hello = f.read()

for word in words:
    hello = hello.replace(word, "#" * len(word))

with open("myfile.txt", "w")as f:
    f.write(hello)
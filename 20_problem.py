class calculator:
    def __init__(self, n):
        self.n = n

    def square(self):
        print(f"this is a square {self.n*self.n}")

    def cube(self):
        print(f"this is a cube {self.n*self.n*self.n}")

    def squareroot(self):
        print(f"this is a squareroot {self.n**1/2}")

a = calculator(4)
a.square()
a.cube()
a.squareroot()
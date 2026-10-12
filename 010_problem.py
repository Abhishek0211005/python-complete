class programmer:
    company = "microsoft"
    def __init__(self, name, salary, pin):
        self.name = name
        self.salary = salary
        self.pin = pin

p = programmer("abhishek", 1200, 135)
print(p.salary, p.pin, p.company, p.name)
m = programmer("mohan", 12000, 1353)
print(m.salary, m.pin, m.company, m.name)
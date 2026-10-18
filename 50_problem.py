from random import randint

class train:
    def __init__(self, trainNo):
        self.trainNo = trainNo

    def book(self, fro, to):
        print(f"Ticket is booked in train no: {self.trainNo} from {fro} to {to}  ")

    def getstatus(self):
        print(f"this is train no. {self.trainNo} is running is on time")

    def getfare(self, fro, to):
        print(f"Ticket fare in train no. {self.trainNo} from {fro} to {to} is {randint(222, 5555)}")

t = train(12005)
t.book("firo", "chandi")
t.getstatus()
t.getfare("firo", "chandi")
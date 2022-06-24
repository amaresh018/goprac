from datetime import date

class Students:
    no_of_std=0
    def __init__(self,name,rolno,dob,city,state):
        self.name=name
        self.rolno=rolno
        self.dob=dob
        self.city=city
        self.state=state
        Students.no_of_std=Students.no_of_std +1

    def Address(self):
        addr=f'Name:{self.name} Rolno:{self.rolno} DOB:{self.rolno} City:{self.city} State:{self.state}'  
        return addr

    def Age(self):
        current_year=date.today().year
        return current_year.self.dob

std1=Students('rish',788,2000,'hosur','tamilnadu')  

print(std1.Address())

print(std1.Age())
print(std1.no_of_std)
print(Students.no_of_std)
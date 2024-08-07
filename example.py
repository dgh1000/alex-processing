def print_message():
    print("hello Dave. This is HAL 9000.")

def process_numbers(x, y):
    z = x * 10 + y
    return z

def main():
    print_message()
    num1 = process_numbers(3, 5)
    print(num1)
    num2 = process_numbers(1, 2)
    print(num2)
    print_message()
    print_message()

# building: build bottom to top
# outline : generally build top-down maybe never sure what the bottom is.
# Module top-level code.
# Module is a Python file. 
# at top level we use numbers 1, 2, 3, ...
# at second level we use letters A, B, C, ...
# at third level we use roman numerals (lower case)
# 1. burger flipping simulator - level 1 headings
#   A. you flip burgers
#       i. take your spatula and flip the burger on the stove til both sides are cooked
#       ii. set stove temperature
#       iii. clean stove top
#   B. you serve customers
#   c. you fire your employees
# 2. hiking
#   A. take a hike around the map
# 3. GTA 6
#   A. you kill people
#   B. you rob banks
# 1. 2. 3. are at the top-level 
print_message()
for i in range(5):
    print_message()
print("i've been trying to reach you for months now")
print_message()
print("everything has changed since i last saw you")
print_message()



# JS-CC-009 : Convert Numbers
This code challenge has two sub tasks. 
You are requested to find solutions to convert binaryNumber to decimal and decimal number to binary.
  
For the purpose of this code challenge, please write your own code rather than using built-in functions to convert numbers to different base systems. Here below built-in functions inJavaScript and Python:

### JavaScript:
 - Binary to decimal
```bash
var binNum ="11110";
var decNum = parseInt(binNum, 2);
console.log(decNum); 
outputs 30
```
 - Decimal to Binary:
```
var decNum=30;
var binNum=decNum.toString(2);
console.log(binNum); 
outputs "11110"
```

### Python:
 - Binary to Decimal
 ```
 binNum = '0b11110'
 int(binNum, 2)
 # outputs 30d
 ```
 - Decimal to binary
 ```
binNum = '0b11110'
int(binNum, 2)
```

## Learning Outcomes

At the end of the this coding challenge, students will be able to;
- Analyze a problem, identify and apply programming knowledge for appropriate solution.
- Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

## Problem Statement


- Write a function that takes a binary number and converts it to decimal integer.
- Write a function that takes a decimal number and converts it to binary number in string representation.
- Please solve the problem for non-negative values only.
    <center> ☺ Happy Coding ✍


## Binary to decimal
### JavaScript
```js
function bin2dec(binStr) {  // binStr is in string type 
   // returning value should be in int type.
   return null;
   }
```

### Python

```py
def bin2dec(binStr) # binStr is in str type
    # returning value should be in int type.
    return None
    pass
```
## Decimal to binary
### JavaScript
```js
function dec2bin(decNum) { // decNum is int type 
    //returning value should be in str type.
    return null;}
```
### Python
```py
def dec2bin(decNum) # decNum is int type
    # returning value should be in str type.
    return None
    pass
```
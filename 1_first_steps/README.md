## Javascript Exercises 

### Integer Numbers Range `getRange()`

Write a function in Javascript that having two integers `x1` and `x2` returns all the integers between them. If `x2` es lower than `x1` it should return -1

### Multiplications table

Write a function that writes in the console the multiplication table (from 1 to 10)

![multiplication](img/multiplication-table.png)

_Hint: https://msdn.microsoft.com/en-us/library/2yfce773(v=vs.94).aspx_

### Multiplications table on column, getMultiplicationColumn()

Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

### `getMultiple23()` function

Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

    Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
    391 414 437 460 483
    Sum : 5313

### `getMaxValue()` function

Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

### `maxOfThree()` function

Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

### `isVowel()` function

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

### Hexadecimal 

Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

_Hint: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split_


    >>> var a = getRGB ('#00FF00');
    >>> a;
    “rgb(0,255,0)”;




### Hexadecimal enhanced

Improves the previous function so besides the conversion also identifies some basic colors:
- Black: #000000
- White: #FFFFFF
- Red: #FF0000
- Green: #00FF00
- Blue: #0000FF

So the result can be (for these cases):

    >>> var a = getRGB ('#00FF00'); 
    >>> a;
    “rgb(0,255,0)   verde”;_


## Calculator(TODO)

Define a function called `calculator` that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

```javascript
   calculator("suma",10,5) // 15
   calculator("resta",10,5) // 5
   calculator("multiplicacion",10,5) // 50
   calculator("division",10,5) // 2
```

## Calculator Plus(TODO)

Define a function called `calculator` that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

```javascript
   calculator("suma",10,5,2,3) // 20
   calculator("resta",10,5,1) // 4
   calculator("multiplicacion",10,5,2) // 100
   calculator("division",10,5) // 2
```

## getFullName(TODO)

Define a function called ​`getFullName`​ that receives a `name` and a `surname` and return the string _"Your full name is " with the name & surname concatenated 

```javascript
   getFullName( "juanma", "garrido") // "Your full name is "juanma garrido""
```

## isNumber(TODO)

Define a function called ​`isNumber`​ that receives a value and return `true` if the value received is a number

```javascript
   isNumber(3) // true
   isNumber("3") // false
   isNumber("asass") // false
```

## isString(TODO)

Define a function called ​`isString`​ that receives a value and return `true` if the value received is a string

```javascript
   isString(3) // false
   isString("3") // true
   isString("asass") // true
```


## isBoolean(TODO)

Define a function called ​`isBoolean`​ that receives a value and return `true` if the value received is a boolean

```javascript
   isString(3) // false
   isString("true") // false
   isString(true) // true
```

## encodeWord(TODO)

Define a function called ​`encodeWord`​ that receives a string and return the codified version of that string replacing the following characters:

- `7` instead of `T`
- `4` instead of `A`
- `5` instead of `S`
- `0` instead of `O`

## encodeWordPlus(TODO)

Improve the previous function to add a random number between 0 and 1000 every 7 characters 


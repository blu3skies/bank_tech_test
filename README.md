# bank_tech_test

## Specification

### Requirements
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see


date || credit || debit || balance  
14/01/2012 || || 500.00 || 2500.00  
13/01/2012 || 2000.00 || || 3000.00  
10/01/2012 || 1000.00 || || 1000.00  

#### Input Output table
(can't make table because of pipes in output)

###### test 1:  
input:  
client deposits 500 on 01/03/2020  

output (print bank statment):  
date || credit || debit || balance  
01/03/2020 || 500.00 || || 500.00  

###### test 2:  
input:  
client deposits 500 on 01/03/2020  
client deposits 1000 on 02/03/2020  

output (print bank statment):  
date || credit || debit || balance  
01/03/2020 || 500.00 || || 500.00  
02/03/2020 || 1000.00 || || 1500.00  

###### test 3:  
input:  
client deposits 1000 on 02/03/2020  
client withdrawls 500 on 03/03/2020  

output (print bank statment):   
date || credit || debit || balance  
02/03/2020 || 1000.00 || || 1000.00  
03/03/2020 || || 500.00 || 500.00 

### possible edgecases 

clients maxes out account

## How to run

To run the app, open bank.html in your browser

## How to run the tests
Everything required to run Jasmine is within the lib folder. You just need to open SpecRunner.html in your browser to run the tests.

## example screen shot
Inline-style: 
![alt text](https://github.com/blu3skies/bank_tech_test/images/example.jpg "Logo Title Text 1")

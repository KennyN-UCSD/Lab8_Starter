# Lab 8 - Starter

## Student and Repo Page

Kenny Nguyen

[GitHub Page](https://kennyn-ucsd.github.io/Lab8_Starter/)

## Test Screenshot

[Test Screenshot](https://github.com/KennyN-UCSD/Lab8_Starter/blob/main/Lab8%20Tests.png)

## Questions

1. Where would you fit your automated tests in your Recipe project development pipeline?
   * In the Recipe project development pipline, you would fit your automated tests within a Github action that runs whenever code is pushed to ensure that any new code that is pushed will pass the basic tests needed for a quality product.

2. Would you use an end to end test to check if a function is returning the correct output?
    * You would not use an end test to check if a function is returning the correct output as that is what unit tests are for. End tests serve to test the final outcomes of the functions after user inputs.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not?
   * You would not use a unit test to test then "message" feature of a messaging application because unit tests focus on testing individual functions of the code rather than what the entire code will output in the end after user inputs. Unit tests could be used to test individual functions of the "message" feature like displaying the incoming data. However, end tests would be used to test the entire "messaging" feature instead.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?
   * You would use a unit test to test the "max message length" feature of a messaging application because that feature would be tied to an single function that can easily be tested. Having a unit test for "max message length" and other singular parts of a message allows for the final output of the functions to have some ensurance of functionality.

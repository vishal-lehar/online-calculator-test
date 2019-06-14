# online-calculator-test
## Test online calculator scenarios
Scenario Outline: Test subtraction, division and CE functionalities
Given Open chrome browser and start application
When I enter the following values and press the CE button	
Then I should be able to see
Calculator should show Initial Display correctly.
Should replace 0 in Initial State.
Should Display Correct digit when clicked (ex. 0-9).
Should not change display if any operator button clicked.
Should Change display to digit when click on digit after operator(ex. -9).
Should perform/Display Subtraction correctly (ex. 73-3=70).
Should Perform/Display Division correctly (ex. 40/2=20).
Should Display Error when Divide by 0.
Should Display 0 when click CE.
Should continue operation when clicked equals again and again.

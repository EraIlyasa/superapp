@Outgoing-recap
Feature: Logistic - Outgoing recap

@OR-001
Scenario: Memastikan user dapat masuk kehalaman outgoing recap
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "menuOutgoingRecap" in side menu page
Then User verify titlePage in outgoing goods page
And User wait for 5 seconds 

Examples: 
| kode        |
| T241014-777 |

@OR-002
Scenario: Memastikan user dapat car kode invoice
When api user login
When open dashboard superapp
Given User click menu "logistic" in side menu page
And User click submenu "menuOutgoingRecap" in side menu page
Then User verify titlePage in outgoing goods page

And User click btnSearch in outgoing recap
And User input kode "<invoice>" into fieldInputSearch outoging recap
And User click btnCari in outgoing recap
And User wait for 5 seconds 
Then User able to see "T241014-777" in outgoing recap

Examples: 
| invoice        |
| T241014-777    |
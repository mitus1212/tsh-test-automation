Feature: Newsletter form

  Background:
    Given User is on the newsletter page

  Scenario: User is redirected to agreement url
    When User clicks agreement url
    Then User is redirected to the agreement url

  Scenario: User clears the start date
    When User provides a valid data
    And User provides a invalid dates
    And User clears start date
    Then Start date is clean
    And User clears start date
    And End date is clean

  Scenario: User clears the end date
    When User provides a valid data
    And User provides a invalid dates
    And User clears start date
    Then End date is clean

  Scenario: User sees an error after trying to add newsletter for less than 30 days period
    When User provides a valid data
    And User provides a invalid dates
    And User clicks Submit button
    Then Error startDate is visible

  Scenario: User sees an error after submitting the form with startDate after endDate
    When User provides a valid data
    And User provides a startDate after endDate
    And User clicks Submit button
    Then Error startDate is visible

  Scenario: User sees an error after submitting the form with the same startDate and endDate
    When User provides a valid data
    And User provides the same startDate and endDate
    And User clicks Submit button
    Then Error startDate is visible

  @sanity
  Scenario: User gets an email after provides valid data
    When User provides a valid data
    And User clicks Submit button
    Then Start Date Field required error is visible

  Scenario: User sees an error after submitting the form with empty form
    When User clicks Submit button
    Then Email Field required error is visible
    And First Name Field required error is visible
    And Surname Field required error is visible
    And Newsletter Type Field required error is visible
    And Start Date Field required error is visible
    And Agreement Field required error is visible

  Scenario: User can't choose past date in the calendar
    Then Yesterday Date is not clickable
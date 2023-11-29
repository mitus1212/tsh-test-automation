Feature: Newsletter form

  Background:
    Given User is on the newsletter page

  Scenario: User gets an email after without endDate provided
    And Mailbox is empty
    When User provides a valid data
    And User provides a valid start date
    And User clicks Submit button
    Then Succesfully added to newsletter window is visible
    And User received an email
    And Email contains valid first name and surname
    And Email contains valid startDate

  @sanity
  Scenario: User gets an email after provides valid data
    And Mailbox is empty
    When User provides a valid data
    And User provides a valid dates
    And User clicks Submit button
    Then Succesfully added to newsletter window is visible
    And User received an email
    And Email contains valid first name and surname
    And Email contains valid startDate
    And Email contains valid endDate

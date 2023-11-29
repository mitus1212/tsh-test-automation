import { Given, When, Then } from "@wdio/cucumber-framework";
import { faker } from "@faker-js/faker";
import NewsletterPage from "../pageObjects/newsletter.page";
import {
  getLatestEmail,
  cleanEmailBox,
  getEmailMessage,
  globalEmailData,
  convertDateFormat,
} from "../../test/utils/utils";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
let startDate = "";
let endDate = "";

When(/^User provides a valid data$/, async () => {
  await NewsletterPage.newsletterEmailInput.setValue(`${process.env.EMAIL}`);
  await NewsletterPage.newsletterFirstName.setValue(firstName);
  await NewsletterPage.newsletterSurname.setValue(lastName);
  await NewsletterPage.newsletterTypeDropdown.click();
  await browser.pause(1000);
  await NewsletterPage.newsletterTypeDropdownValue.click();
  await NewsletterPage.sexRadioButton.click();
  await NewsletterPage.termsAndConditionsCheckbox.click();
});

When(/^User clicks agreement url$/, async () => {
  await NewsletterPage.agreementUrl.click();
});

When(/^User is redirected to the agreement url$/, async () => {
  expect(browser).toHaveUrlContaining("https://www.google.pl/");
});

When(/^User provides a invalid dates$/, async () => {
  await NewsletterPage.startDateSelect.click();
  await NewsletterPage.todayDateCalendar.waitForExist({ timeout: 10000 });
  await NewsletterPage.todayDateCalendar.moveTo();
  await NewsletterPage.todayDateCalendar.click();
  await NewsletterPage.endDateSelect.click();
  await NewsletterPage.tomorrowDateCalendar.waitForExist({ timeout: 10000 });
  await NewsletterPage.tomorrowDateCalendar.moveTo();
  await NewsletterPage.tomorrowDateCalendar.click();
});

When(/^User provides the same startDate and endDate$/, async () => {
  await NewsletterPage.startDateSelect.click();
  await NewsletterPage.todayDateCalendar.click();
  await NewsletterPage.endDateSelect.click();
  await NewsletterPage.todayDateCalendar.click();
});

When(/^User provides a startDate after endDate$/, async () => {
  await NewsletterPage.startDateSelect.click();
  await NewsletterPage.lastDayOfCurrentMonth.click();
  await NewsletterPage.endDateSelect.click();
  await NewsletterPage.tomorrowDateCalendar.click();
});

When(/^User provides a valid start date$/, async () => {
  await NewsletterPage.startDateSelect.click();
  await NewsletterPage.todayDateCalendar.click();
  startDate = await NewsletterPage.todayDateCalendar.getAttribute("title");
});

When(/^User provides a valid dates$/, async () => {
  await NewsletterPage.startDateSelect.click();
  await NewsletterPage.todayDateCalendar.click();
  startDate = await NewsletterPage.todayDateCalendar.getAttribute("title");
  await NewsletterPage.endDateSelect.click();
  await NewsletterPage.nextMonthArrow.click();
  await NewsletterPage.lastDayOfCurrentMonth.click();
  endDate = await NewsletterPage.lastDayOfCurrentMonth.getAttribute("title");
});

When(/^User clicks Submit button$/, async () => {
  await NewsletterPage.submitButton.moveTo();
  await NewsletterPage.submitButton.click();
});

When(/^User clears start date$/, async () => {
  await NewsletterPage.clearStartDateButton.moveTo();
  await NewsletterPage.clearStartDateButton.waitForExist({ timeout: 10000 });
  await NewsletterPage.clearStartDateButton.click();
});

Then(/^Succesfully added to newsletter window is visible$/, async () => {
  const addedToNewsletterHeader = await NewsletterPage.addedToNewsletterHeader;
  await addedToNewsletterHeader.waitForExist({ timeout: 10000 });
  expect(await addedToNewsletterHeader.isExisting()).toEqual(true);
  const addedToNewsletterMessage =
    await NewsletterPage.addedToNewsletterMessage;
  await addedToNewsletterMessage.waitForExist({ timeout: 10000 });
  expect(await addedToNewsletterMessage.isExisting()).toEqual(true);
});

Then(/^Error startDate is visible$/, async () => {
  const startDateError = await NewsletterPage.startDateError;
  await startDateError.waitForExist({ timeout: 15000 });
  // expect(await startDateError).toHaveText(
  //   `"endDate" must be at least 30 days after the "startDate"!`
  // );
});

Then(/^User received an email$/, async () => {
  await browser.pause(3000);
  await getLatestEmail();
  await getEmailMessage();
});

Given(/^Mailbox is empty$/, async () => {
  await cleanEmailBox();
});

Then(/^Email contains valid first name and surname$/, async () => {
  const firstLastNameLine = `Hello ${firstName} ${lastName}, you have been signed to &#x22;medical&#x22;.`;
  const firstNameLastNameExists =
    globalEmailData?.emailMessageTextRaw.includes(firstLastNameLine);
  expect(firstNameLastNameExists).toEqual(true);
});

Then(/^Email contains valid startDate$/, async () => {
  const formattedStartDate = convertDateFormat(startDate);

  const startDateLine = `You will get your first newsletter beginning ${formattedStartDate}`;
  console.log(globalEmailData?.emailMessageTextRaw);
  console.log(startDateLine);

  const startDateLineExists =
    globalEmailData?.emailMessageTextRaw.includes(startDateLine);
  expect(startDateLineExists).toEqual(true);
});

Then(/^Email contains valid endDate$/, async () => {
  const formattedEndDate = convertDateFormat(endDate);
  const endDateLine = `Your subscription will be activated until ${formattedEndDate}`;
  const endDateLineExists =
    globalEmailData?.emailMessageTextRaw.includes(endDateLine);
  expect(endDateLineExists).toEqual(true);
});

Then(/^Start date is clean$/, async () => {
  const startDateError = await NewsletterPage.startDateSelectedValue;
  expect(startDateError).toBeUndefined;
});

Then(/^End date is clean$/, async () => {
  const endDateError = await NewsletterPage.endDateSelectedValue;
  await endDateError.waitForExist({ timeout: 10000 });
  expect(await endDateError).toBeUndefined;
});

Then(/^Email Field required error is visible$/, async () => {
  const emailFieldError = await NewsletterPage.emailFieldError;
  await emailFieldError.waitForExist({ timeout: 10000 });
  expect(await emailFieldError).toHaveText(`The "E-mail" field is required!`);
});

Then(/^First Name Field required error is visible$/, async () => {
  const firstNameFieldError = await NewsletterPage.firstNameFieldError;
  await firstNameFieldError.waitForExist({ timeout: 10000 });
  expect(await firstNameFieldError).toHaveText(
    `The "First name" field is required!`
  );
});

Then(/^Surname Field required error is visible$/, async () => {
  const surnameFieldError = await NewsletterPage.surnameFieldError;
  await surnameFieldError.waitForExist({ timeout: 10000 });
  expect(await surnameFieldError).toHaveText(
    `The "Surname" field is required!`
  );
});

Then(/^Newsletter Type Field required error is visible$/, async () => {
  const newsletterTypeFieldError =
    await NewsletterPage.newsletterTypeFieldError;
  await newsletterTypeFieldError.waitForExist({ timeout: 10000 });
  expect(await newsletterTypeFieldError).toHaveText(
    `The "newsletter type" field is required!`
  );
});

Then(/^Start Date Field required error is visible$/, async () => {
  const startDateFieldError = await NewsletterPage.startDateFieldError;
  await startDateFieldError.waitForExist({ timeout: 10000 });
  expect(await startDateFieldError).toHaveText(
    `The "Start date" field is required!`
  );
});

Then(/^Agreement Field required error is visible$/, async () => {
  const agreementCheckboxError = await NewsletterPage.agreementCheckboxError;
  await agreementCheckboxError.waitForExist({ timeout: 10000 });
  expect(await agreementCheckboxError).toHaveText(
    `Accepting terms and condition is required!`
  );
});

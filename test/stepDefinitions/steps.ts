import { Given } from "@wdio/cucumber-framework";
import NewsletterPage from "../pageObjects/newsletter.page";
require("dotenv").config();

Given(/^User is on the newsletter page$/, async () => {
  await browser.url(process.env.BASE_URL);
  expect(await NewsletterPage.newsletterEmailInput.isExisting()).toEqual(true);
});

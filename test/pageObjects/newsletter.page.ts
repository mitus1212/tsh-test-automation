import { ChainablePromiseElement } from "webdriverio";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewsletterPage {
  /**
   * define selectors using getter methods
   */

  public get newsletterEmailInput(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#newsletter_email");
  }

  public get newsletterFirstName(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#newsletter_name");
  }

  public get newsletterSurname(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#newsletter_surname");
  }

  public get newsletterTypeDropdown(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#newsletter_newsType");
  }

  public get startDateSelect(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//span[@id='newsletter_startDate']");
  }

  public get endDateSelect(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//span[@id='newsletter_endDate']");
  }

  public get sexRadioButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//div[@id='newsletter_Sex']/descendant::input[@value='male']");
  }

  public get termsAndConditionsCheckbox(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//input[@id='newsletter_agreement']");
  }

  public get submitButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//button[@type='submit']");
  }

  public get agreementUrl(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//a[text()='agreement']");
  }

  public get termsAndConditionsError(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//div[text()='Accepting terms and condition is required!']");
  }

  public get todayDateCalendar(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(
      "//td[contains(@class,'ant-calendar-cell ant-calendar-today')]"
    );
  }

  public get tomorrowDateCalendar(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(
      "//td[contains(@class,'ant-calendar-cell ant-calendar-today')]/following-sibling::td/child::div"
    );
  }

  public get newsletterTypeDropdownValue(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(
      "//li[contains(@class,'ant-select-dropdown-menu-item') and text()='Medical']"
    );
  }

  public get clearStartDateButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//i[contains(@class,'close-circle')]/child::*");
  }

  public get startDateError(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//div[contains(@class,'ant-notification-notice-description')]");
  }

  public get addedToNewsletterHeader(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(
      "//span[contains(@class,'confirm-title') and text()='Successfully added to newsletter']"
    );
  }

  public get addedToNewsletterMessage(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(
      "//div[contains(@class,'confirm-content') and text()='Thank you!']"
    );
  }

  public get addedToNewsletterButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//span[text()='OK']/parent::button");
  }

  public get nextMonthArrow(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//a[contains(@class,'next-month-btn')]");
  }

  public get lastDayOfCurrentMonth(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("(//td[contains(@class,'calendar-last-day-of-month')])[last()]");
  }

  public get startDateSelectedValue(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//span[@id='newsletter_startDate']/descendant::input");
  }

  public get endDateSelectedValue(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//span[@id='newsletter_endDate']/descendant::input");
  }

  public get emailFieldError(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("//input[@id='newsletter_email']/parent::span/following-sibling::div");
  }

  public get firstNameFieldError(): ChainablePromiseElement<
  Promise<WebdriverIO.Element>
> {
  return $("//input[@id='newsletter_name']/parent::span/following-sibling::div");
}


public get surnameFieldError(): ChainablePromiseElement<
Promise<WebdriverIO.Element>
> {
return $("//input[@id='newsletter_surname']/parent::span/following-sibling::div");
}

public get newsletterTypeFieldError(): ChainablePromiseElement<
Promise<WebdriverIO.Element>
> {
return $("//div[@id='newsletter_newsType']/ancestor::div[contains(@class, 'has-error')]/descendant::div[contains(@class, 'form-explain')]");
}

public get startDateFieldError(): ChainablePromiseElement<
Promise<WebdriverIO.Element>
> {
return $("//span[@id='newsletter_startDate']/ancestor::div[contains(@class, 'has-error')]/descendant::div[contains(@class, 'form-explain')]");
}

public get agreementCheckboxError(): ChainablePromiseElement<
Promise<WebdriverIO.Element>
> {
return $("//input[@id='newsletter_agreement']/ancestor::div[contains(@class, 'has-error')]/descendant::div[contains(@class, 'form-explain')]");
}

}

export default new NewsletterPage();

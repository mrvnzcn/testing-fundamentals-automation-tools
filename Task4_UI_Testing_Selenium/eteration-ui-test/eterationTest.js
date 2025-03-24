const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

(async function testInstructorCount() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://academy.eteration.com/tr");

    const instructorsLink = await driver.wait(
      until.elementLocated(By.css("a[href='/tr/instructors']")),
      5000
    );

    await driver.wait(until.elementIsVisible(instructorsLink), 5000);
    await instructorsLink.click();

    await driver.sleep(2000);

    const instructors = await driver.findElements(By.css(".instructors .instructor-item"));


    assert.ok(instructors.length > 0, "Instructor list should not be empty.");
    assert.strictEqual(instructors.length, 6, "Instructor count should be exactly 6.");

    console.log("Passed");

  } catch (error) {
    console.error("Failed:", error.message);
  } finally {
    await driver.quit();
  }
})();

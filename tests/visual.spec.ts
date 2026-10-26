import { test, expect } from "@playwright/test";

test("linechart page matches baseline", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080/linechart.html");
  await expect(page).toHaveScreenshot("linechart-full.png", { fullPage: true });
});

test("scatterplot page matches baseline", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080/scatterplot.html");
  await expect(page).toHaveScreenshot("scatterplot-full.png", { fullPage: true });
});

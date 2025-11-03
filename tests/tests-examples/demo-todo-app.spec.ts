import { test, expect } from '@playwright/test';

test('should allow me to add and complete tasks', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.locator('.new-todo').fill('Acheter du pain');
  await page.locator('.new-todo').press('Enter');

  await page.locator('.new-todo').fill('Lire un livre');
  await page.locator('.new-todo').press('Enter');

  await expect(page.locator('.todo-list li')).toHaveCount(2);

  // coche uniquement la tâche "Acheter du pain"
  await page.locator('.todo-list li').filter({ hasText: 'Acheter du pain' }).locator('.toggle').check();

  // vérifie uniquement cette tâche
  await expect(
    page.locator('.todo-list li').filter({ hasText: 'Acheter du pain' })
  ).toHaveClass(/completed/);
});

import { test, expect } from '@playwright/test';

test('user can create a new journal entry', async ({ page }) => {
  // Go to the app
  await page.goto('/');

  // Click the "Write something" button
  await page.getByText('Write something').click();

  // Type a title
  await page.locator('#entry-title').fill('My Test Entry');

  // Click the back button to save and return home
  await page.locator('button.back-btn[onclick="saveEntry()"]').click();

  // Confirm the entry appears on the home screen
  await expect(page.locator('#home-entries')).toContainText('My Test Entry');
});
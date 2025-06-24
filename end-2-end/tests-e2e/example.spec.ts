import { expect, test } from '@playwright/test';

test('Les questions sont présentes', async ({ page }) => {
  await page.goto('https://rubrr.s3-main.oktopod.app/');
  await page.getByRole('link', { name: 'Liste des questions' }).click();
  await expect(page.getByText('Retour Toutes les questions')).toBeVisible();
});

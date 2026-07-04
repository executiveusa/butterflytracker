import { test, expect } from '@playwright/test';test('dashboard shell',async({page})=>{await page.goto('/app');await expect(page.getByText('Panel Monarcas y Morphos')).toBeVisible();});

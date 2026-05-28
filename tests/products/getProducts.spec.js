import { test, expect } from '@playwright/test';
import { ProductClient } from '../../api/clients/productClient';

test('GET all products', async ({ request }) => {

  const productClient = new ProductClient(request);

  const response = await productClient.getProducts();

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);

});
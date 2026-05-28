import { test, expect } from '@playwright/test';
import { ProductClient } from '../../api/clients/productClient';

test('GET single product', async ({ request }) => {

  const productClient = new ProductClient(request);

  const response = await productClient.getSingleProduct(20);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(20);
  expect(body.title).toBeDefined();

});
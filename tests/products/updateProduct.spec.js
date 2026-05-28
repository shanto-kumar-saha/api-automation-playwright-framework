import { test, expect } from '@playwright/test';
import { ProductClient } from '../../api/clients/productClient';
import { productData } from '../../test-data/productData';

test('UPDATE product', async ({ request }) => {

  const productClient = new ProductClient(request);

  const response = await productClient.updateProduct(
    20,
    productData.updateProduct
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('Updated QA Product');
  expect(body.price).toBe(1500);

});
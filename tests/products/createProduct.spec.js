import { test, expect } from '@playwright/test';
import { ProductClient } from '../../api/clients/productClient';
import { productData } from '../../test-data/productData';

test('CREATE product', async ({ request }) => {

  const productClient = new ProductClient(request);

  const response = await productClient.createProduct(
    productData.createProduct
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('QA Product');

});
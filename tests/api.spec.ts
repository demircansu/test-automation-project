/*import { test, expect } from '@playwright/test';

test('GET users API test', async ({ request }) => {
  const response = await request.get(
    'https://reqres.in/api/users',
    {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    }
  );

  console.log(response.status());
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data.length).toBeGreaterThan(0);
});
*/
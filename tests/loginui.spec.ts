import { test, expect, Page } from '@playwright/test';
test.setTimeout(60000);
// kiểm tra nội dung title bar
test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Shoppe Fake - Nhóm G/);
});

// qua trang đăng ký
test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // Click the get started link.
  await page.getByRole('link', { name: 'Đăng Ký' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Đăng Ký' })).toBeVisible();
});


test('hover link', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  // hover it.
  await page.getByRole('link', { name: 'Đăng Ký' }).hover();
});

test('hover button', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  // hover it.
  await page.getByRole('button', { name: 'Đăng Nhập' }).hover();
});

test('input email', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  const inputSelector = '//*[@id="root"]/div/div/div/div/div/div/div[1]/input'; // Thay thế bằng selector thực tế của trường nhập liệu
  await page.waitForSelector(inputSelector);

  // Nhập dữ liệu vào trường nhập liệu sử dụng fill
  const inputValue = 'Hello, Playwright!';
  await page.fill(inputSelector, inputValue);

  // Lấy giá trị từ trường nhập liệu và kiểm tra xem nó có trùng khớp hay không
  const inputFieldValue = await page.$eval(inputSelector, (input: HTMLInputElement) => input.value);
  expect(inputFieldValue).toBe(inputValue);

  // Hoặc kiểm tra trực tiếp trên trang
  await expect(page.$eval(inputSelector, (input: HTMLInputElement) => input.value)).resolves.toBe(inputValue);


});


test('input password', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  const inputSelector = '//*[@id="root"]/div/div/div/div/div/div/div[2]/input'; // Thay thế bằng selector thực tế của trường nhập liệu
  await page.waitForSelector(inputSelector);

  // Nhập dữ liệu vào trường nhập liệu sử dụng fill
  const inputValue = 'Hello, Playwright!';
  await page.fill(inputSelector, inputValue);

  // Lấy giá trị từ trường nhập liệu và kiểm tra xem nó có trùng khớp hay không
  const inputFieldValue = await page.$eval(inputSelector, (input: HTMLInputElement) => input.value);
  expect(inputFieldValue).toBe(inputValue);

  // Hoặc kiểm tra trực tiếp trên trang
  await expect(page.$eval(inputSelector, (input: HTMLInputElement) => input.value)).resolves.toBe(inputValue);

  // Chờ một khoảng thời gian ngắn để xem kết quả (tùy thuộc vào trang web của bạn)
  await page.waitForTimeout(2000);

});

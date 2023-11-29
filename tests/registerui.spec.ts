import { test, expect, Page } from '@playwright/test';
test.setTimeout(100000);

test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000/register');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Shoppe Fake - Nhóm G/);
});

test('hover button', async ({ page }) => {
    await page.goto('http://localhost:3000/register');
    // hover it.
    await page.getByRole('button', { name: 'Đăng Ký' }).hover();
});

// quay lại trang đăng nhập
test('get started link', async ({ page }) => {
    await page.goto('http://localhost:3000/register');

    // Click the get started link.
    await page.getByRole('link', { name: 'Đăng Nhập' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Đăng Nhập' })).toBeVisible();
});

test('input email', async ({ page }) => {
    await page.goto('http://localhost:3000/register');
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

test('input name', async ({ page }) => {
    await page.goto('http://localhost:3000/register');
    const inputSelector = '#root > div > div > div > div > div > div > div:nth-child(3) > input'; // Thay thế bằng selector thực tế của trường nhập liệu
    await page.waitForSelector(inputSelector);

    // Nhập dữ liệu vào trường nhập liệu sử dụng fill
    const inputValue = 'Lan anh nè';
    await page.fill(inputSelector, inputValue);

    // Lấy giá trị từ trường nhập liệu và kiểm tra xem nó có trùng khớp hay không
    const inputFieldValue = await page.$eval(inputSelector, (input: HTMLInputElement) => input.value);
    expect(inputFieldValue).toBe(inputValue);

    // Hoặc kiểm tra trực tiếp trên trang
    await expect(page.$eval(inputSelector, (input: HTMLInputElement) => input.value)).resolves.toBe(inputValue);

});

test('input password', async ({ page }) => {
    await page.goto('http://localhost:3000/register');
    const inputSelector = '#root > div > div > div > div > div > div > div:nth-child(4) > input'; // Thay thế bằng selector thực tế của trường nhập liệu
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

test('input confirm password', async ({ page }) => {
    await page.goto('http://localhost:3000/register');
    const inputSelector = '//*[@id="root"]/div/div/div/div/div/div/div[4]/input'; // Thay thế bằng selector thực tế của trường nhập liệu
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


test('Kiểm tra màu sắc của button', async ({ page }) => {
    // Điều hướng đến trang có chứa button cần kiểm tra
    await page.goto('http://localhost:3000/register');

    // Selector của button (thay thế bằng selector thực tế của button)
    const buttonSelector = '#root > div > div > div > div > div > div > div.button_wapper__W9A33.button_large__iC1fM';

    // Sử dụng page.$eval để lấy giá trị thuộc tính CSS 'background-color' của button
    const buttonColor = await page.$eval(
        buttonSelector,
        (button: HTMLButtonElement) => {
            const computedStyle = getComputedStyle(button);
            return computedStyle.backgroundColor;
        }
    );

    // Chuyển đổi giá trị màu sắc thành dạng không có khoảng trắng
    const expectedColorWithoutSpaces = "rgb(165,77,224)";
    const receivedColorWithoutSpaces = buttonColor.replace(/\s/g, '');

    // So sánh giá trị màu sắc
    expect(receivedColorWithoutSpaces).toEqual(expectedColorWithoutSpaces);
});

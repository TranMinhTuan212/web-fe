import { test, expect } from '@playwright/test';
test.setTimeout(60000);
// đăng nhập tk admin
test('Successfully logged in as administrator', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'admin@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Tuan123!');
    // await page.click('//*[@id="root"]/div/div/div/div/div/div/div[4]');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();
    await page.waitForTimeout(2000);
    // Kiểm tra xem đã chuyển hướng đến trang mong muốn hay chưa
    const currentUrl = page.url();
    expect(currentUrl).toEqual('http://localhost:3000/');
    await page.click('//*[@id="root"]/div/div/div/div[1]/div/div[2]/a[2]');
});

// đăng nhập tk user
test('Successfully logged in as user', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'ahah@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Lananh123!');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();
    await page.waitForTimeout(2000);
    // Kiểm tra xem đã chuyển hướng đến trang mong muốn hay chưa
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:3000/');
});

//   bỏ trống tất cả
test('Leave all blank', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', '');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();

});

//   Bỏ trống email, nhập pass
test('Leave email blank', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Lananhne123!');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();

});

//bỏ trống pass, nhập email
test('Leave password blank', async ({ page }) => {
    // Điều hướng đến trang đăng nhập 
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'nguyenngoclananh@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', '');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();

});

//email > 50 , pass đúng
test('Email longer than 50 characters', async ({ page }) => {
    // Điều hướng đến trang đăng nhập 
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'nguyenngoclananh@gmail.comnguyenngoclananh@gmail.comnguyenngoclananh@gmail.comnguyenngoclananh@gmail.comnguyenngoclananh.j7p@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Lananh123!');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();

});

//pass < 6 , email đúng
test('Pass longer than 30 characters', async ({ page }) => {
    // Điều hướng đến trang đăng nhập 
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'nguyenngoclananh@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!Lananh123!');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();

});

//email không hợp lệ
test('Invalid email', async ({ page }) => {
    // Điều hướng đến trang đăng nhập 
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'userexample.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Lananh123!');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();

});


//đăng nhập sai
test('Wrong login', async ({ page }) => {
    // Điều hướng đến trang đăng nhập 
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'ahah@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Lananh1232!');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();
    await page.waitForTimeout(5000);
});

// Nhập [Email] có dấu gạch ngang,dấu nháy đơn,dấu nháy kép, nhập đúng pass
test('Enter [Email] with dashes, single quotes, double quotes', async ({ page }) => {
    // Điều hướng đến trang đăng nhập 
    await page.goto('http://localhost:3000/login');
    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', '"admin-123@gmail.com"');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Lananh123!');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();
    await page.waitForTimeout(5000);
});

// email không đúng, pass đúng
test('Enter incorrect email', async ({ page }) => {
    // Điều hướng đến trang đăng nhập 
    await page.goto('http://localhost:3000/login');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'admi@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Tuan123!');
    await page.getByRole('button', { name: 'Đăng Nhập' }).click();
    await page.waitForTimeout(5000);
});

import { test, expect } from '@playwright/test';

test('Sign Up Success', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/register');

    // Nhập thông tin đăng ký
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'thuyle@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Thủy');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[3]/input', 'Thuy123!');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[4]/input', 'Thuy123!');

    // Click nút đăng ký
    await page.click('//*[@id="root"]/div/div/div/div/div/div/div[6]');

    // Chờ một khoảng thời gian (tùy thuộc vào trang web của bạn)
    await page.waitForTimeout(3000);
    await page.click('//*[@id="root"]/div/div[2]/div/div[4]/div');
    // Kiểm tra xem đã chuyển hướng đến trang mong muốn hay chưa
    const currentUrl = page.url();
    expect(currentUrl).toEqual('http://localhost:3000/login');

});


// tài khoản tồn tại
test('Register an existing account', async ({ page }) => {
    // Di chuyển đến trang đăng ký
    await page.goto('http://localhost:3000/register');

    // Điền thông tin vào biểu mẫu đăng ký với thông tin tài khoản đã tồn tại
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'thuyle@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Thủy');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[3]/input', 'Thuy123!');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[4]/input', 'Thuy123!');
    await page.click('//*[@id="root"]/div/div/div/div/div/div/div[6]');

    // Chờ một khoảng thời gian ngắn để cho thông báo lỗi xuất hiện (nếu có)
    test.setTimeout(60000);

});


//   bỏ trống tất cả
test('Leave all blank', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/register');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[3]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[4]/input', '');
    await page.click('//*[@id="root"]/div/div/div/div/div/div/div[6]');

});

//   Nhập email bỏ trống tất cả
test('Enter email', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/register');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'nguyenngoclananh@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[3]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[4]/input', '');
    await page.click('//*[@id="root"]/div/div/div/div/div/div/div[6]');

});

//   Nhập tên bỏ trống tất cả
test('Enter name', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/register');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'lan anh');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[3]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[4]/input', '');
    await page.click('//*[@id="root"]/div/div/div/div/div/div/div[6]');

});

//   Nhập mật khẩu bỏ trống tất cả
test('Enter pass', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/register');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[3]/input', 'Lananh123!');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[4]/input', '');
    await page.click('//*[@id="root"]/div/div/div/div/div/div/div[6]');

});

//   Nhập lại mật khẩu bỏ trống tất cả
test('Enter confirm password', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/register');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[3]/input', '');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[4]/input', 'Lananh123!');
    await page.click('//*[@id="root"]/div/div/div/div/div/div/div[6]');

});
//  [Nhập lại mật khẩu] không trùng với [Mật khẩu], nhập đúng các trường còn lại
test('Re-enter the password that is not the same', async ({ page }) => {
    // Điều hướng đến trang đăng nhập admin
    await page.goto('http://localhost:3000/register');

    // Nhập thông tin đăng nhập và nhấn nút đăng nhập
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[1]/input', 'aaa@gmail.com');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[2]/input', 'Lan anh');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[3]/input', 'Lananh123!');
    await page.fill('//*[@id="root"]/div/div/div/div/div/div/div[4]/input', 'Lananh1234!');
    await page.click('//*[@id="root"]/div/div/div/div/div/div/div[6]');

});

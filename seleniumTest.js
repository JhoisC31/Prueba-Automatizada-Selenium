const { Builder, By } = require('selenium-webdriver');
const path = require('path');
const fs = require('fs');
const captureDir = path.join(__dirname, 'capture');


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function seleniumTest() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        const filePath = path.resolve('index.html');
        await driver.get(`file:///${filePath}`);

        const incrementoBtn = await driver.findElement(By.className('increase'));
        const decreaseBtn = await driver.findElement(By.className('decrease'));
        const resetBtn = await driver.findElement(By.className('reset'));

        /* INCREMENTAR */
        for (let i = 0; i < 10; i++) {
            await incrementoBtn.click();
            await wait(900);
        }

        /* captura despues de incrementar */
        const incrementImg = await driver.takeScreenshot();
        fs.writeFileSync(path.join(captureDir, 'incremented_to_10.png'), incrementImg, 'base64');

        // RESET
        await resetBtn.click();
        await wait(1000);

        /* DECREMENTO */
        for (let i = 0; i < 5; i++) {
            await decreaseBtn.click();
            await wait(1000);
        }

        /* captura despues del decremento */
        const decrementImg = await driver.takeScreenshot();
        fs.writeFileSync(path.join(captureDir, 'decremented_to_minus_5.png'), decrementImg, 'base64');

        /* reseteo del cntador */
        await resetBtn.click();
        await wait(1000);

    } catch (err) {
        console.error('Error durante la prueba:', err);
    } 
    finally {
        await driver.quit();
    }
})();
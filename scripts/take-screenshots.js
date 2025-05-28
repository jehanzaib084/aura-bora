import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function takeScreenshots() {
  // Start the browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Navigate to localhost
    await page.goto('http://localhost:3000');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Take desktop screenshot
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({ 
      path: path.join(__dirname, '../public/desktop.png'),
      fullPage: true 
    });

    // Take mobile screenshot
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ 
      path: path.join(__dirname, '../public/mobile.png'),
      fullPage: true 
    });

    console.log('Screenshots taken successfully!');
  } catch (error) {
    console.error('Error taking screenshots:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

takeScreenshots(); 
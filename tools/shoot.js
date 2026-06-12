const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/root/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome' });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  page.on('pageerror', e => console.log('PAGEERROR:', e.message));
  page.on('console', m => { if (m.type() === 'error') console.log('CONSOLE:', m.text()); });
  await page.goto('http://127.0.0.1:8866/prototype/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  await page.screenshot({ path: '/root/terra-chronicle/shots/01_title.png' });
  await page.click('#enter');
  await page.waitForTimeout(1300);
  await page.screenshot({ path: '/root/terra-chronicle/shots/02_transition.png' });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: '/root/terra-chronicle/shots/03_map.png' });
  // 点击中心地块打开面板
  await page.mouse.click(800, 430);
  await page.waitForTimeout(1400);
  await page.screenshot({ path: '/root/terra-chronicle/shots/04_panel.png' });
  // 等到季节/昼夜推进后再截一张
  await page.waitForTimeout(16000);
  await page.screenshot({ path: '/root/terra-chronicle/shots/05_later.png' });
  await browser.close();
  console.log('SHOTS_DONE');
})().catch(e => { console.error(e); process.exit(1); });

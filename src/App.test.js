import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import puppeteer from 'puppeteer';

test('Test “Web Dev Jokes” heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Web Dev Jokes/i });
  expect(headingElement).toBeInTheDocument();
});

describe('Test on visual regressions', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should match the homepage snapshot', async () => {
    await page.goto('http://localhost:3000');
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
const puppeteer = require('puppeteer');
const dotenv = require('dotenv').config();

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  //acessa a pagina
  await page.on('load', () => console.log('Page loaded!'))
  await page.goto('https://www.instagram.com/');
  // acessa a pagina

  //preenche e envia o form de login
  await page.waitForSelector('[name="username"]', {timeout: 60000})
  await page.type('[name="username"]', process.env.INSTAGRAM_USERNAME, {delay: 150})
  await page.type('[name="password"]', process.env.INSTAGRAM_USER_PASSWORD, {delay: 150})
  await page.click('.sqdOP.L3NKy.y3zKF')
  //preenche e envia o form de login

  //recusa o pedido de ligar as notificacoes
  await page.waitForSelector('.aOOlW.HoLwm')
  await page.click('.aOOlW.HoLwm')
  //recusa o pedido de ligar as notificacoes

  //Conversa com outro usuario
  await page.click('[href="/direct/inbox/"]') //**Clica no botao de chat*/

  await page.waitForSelector('.wpO6b.ZQScA', {timeout: 30000})//esperar pelo aparecimento do botao de novo chat na arvore DOM
  await page.click('.wpO6b.ZQScA')//clicar no botao de novo chat

  await page.type('[name="queryBox"]', process.env.INSTAGRAM_SEARCHING_USER, {delay: 220})
  
  await page.waitForTimeout(5000).then(() => console.log('Pagina esperou para aparecer os resultados'))
  await page.waitForSelector('.dCJp8', {timeout: 60000}).then(() => console.log('Esperou aparecer o botao do maluco'))
  await page.click('.dCJp8')

  await page.waitForSelector('.sqdOP.yWX7d.y3zKF.cB_4K', {timeout: 60000})
  await page.click('.sqdOP.yWX7d.y3zKF.cB_4K')

  await page.waitForSelector('[placeholder="Message..."]')
  await page.type('[placeholder="Message..."]', 'Esta mensagem esta sendo mandada atraves do robo dos guri', {delay: 100})

  await page.waitForTimeout(5000)

  await page.focus('.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht button').then(() => console.log('Clicou no botao para nos'))
  await page.click('.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht button', {clickCount: 2}).then(() => console.log('Clicou no botao para nos'))

  //Conversa com outro usuario

})();
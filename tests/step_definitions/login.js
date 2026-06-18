const  { Given, When, Then } = require('@cucumber/cucumber')
const  { chromium, expect } = require("@playwright/test")

let browser
let page

Given('I am on the login page', async  function () {									//"Dado que estou na página de login"
  browser = await chromium.launch({headless: false})									//abrir o navegador
  page = await browser.newPage()														//abrir uma nova página

  await page.goto('https://front.serverest.dev/login') 									//vai abrir essclse link
})

 When('I type my {string} and {string}', async function (email, password) {						//"Quando eu digitar meu email e senha"
  await page.locator("[data-testid='email']").fill(email)										//preencher o campo de email com o email citado; (necessario dar um 'inspecionar' no campo email para pegar o data-testid)
  await page.locator("[data-testid='senha']").fill(password)									//preencher o campo de senha com a senha citada;  (necessario dar um 'inspecionar' no campo senha para pegar o data-testid)
  await page.locator("[data-testid='entrar']").click()											//clicar no botão de login
})

Then('I have a successful login', async function () {											//"Então eu tenho um login bem sucedido"
 const homeTitle = await page.locator('h1')														//localizar o elemento h1 na página
 await expect(homeTitle).toContainText('Bem Vindo test teste') 									//verificar se o texto "Bem Vindo Test test" está presente na página
 }) 

 Then('I receive an error message', async function () {											//"Então eu recebo uma mensagem de erro"
  const invalidLoginAlert = await page.locator(".alert.alert-secondary.alert-dismissible")		//localizar o elemento de alerta de login inválido
  await expect(invalidLoginAlert).toContainText('Email e/ou senha inválidos')					//verificar se o texto "Email e/ou senha inválidos" está presente na página
})
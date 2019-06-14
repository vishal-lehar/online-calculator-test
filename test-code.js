const retry = require('promise-retry')
const {By} = require('selenium-webdriver')

  before(function() {
	  await driver.get('https://www.online-calculator.com/full-screen-calculator/')

         const digit0Element = await driver.findElement(By.css('.digit-0'))
	  const digit1Element = await driver.findElement(By.css('.digit-1'))
	  const digit2Element = await driver.findElement(By.css('.digit-2'))
      	  const digit3Element = await driver.findElement(By.css('.digit-3'))
	  const digit4Element = await driver.findElement(By.css('.digit-4'))
	  const digit5Element = await driver.findElement(By.css('.digit-5'))
	  const digit6Element = await driver.findElement(By.css('.digit-6'))
	  const digit7Element = await driver.findElement(By.css('.digit-7'))
	  const digit8Element = await driver.findElement(By.css('.digit-8'))
	  const digit9Element = await driver.findElement(By.css('.digit-9'))
         const operatorSubtraction = await driver.findElement(By.css('.operator-subtraction'))
	  const operatorDivision = await driver.findElement(By.css('.operator-division'))
         const operatorEquals = await driver.findElement(By.css('.operator-equals'))
  })

  it('Display Calculator', async function () {
    await driver.get('https://www.online-calculator.com/full-screen-calculator/')

    await retry(async () => {
      const title = await driver.getTitle()

      expect(title).to.equal('Full Screen Calculator - Online Calculator')
    })
  })

  it('Display 0', async function () {
    await driver.get('https://www.online-calculator.com/full-screen-calculator/')
    
    await retry(async () => {
      const displayElement = await driver.findElement(By.css('.display'))
      const displayText = await displayElement.getText()

      expect(displayText).to.equal('0')
    })
  })

  it('Subtraction', async function () {
      await driver.get('https://www.online-calculator.com/full-screen-calculator/')

      await digit7Element.click()
      await digit3Element.click()
      await operatorSubtraction.click()
      await digit3Element.click()
      await operatorEquals.click()

	await retry(async () => {
      const displayElement = await driver.findElement(By.css('.display'))
      const displayText = await displayElement.getText()

      expect(displayText).to.equal('70')
    })
  })
  
  it('Division', async function () {
      await driver.get('https://www.online-calculator.com/full-screen-calculator/')

      await digit4Element.click()
      await digit0Element.click()
      await operatorDivision.click()
	  await digit2Element.click()
      await operatorEquals.click()

	await retry(async () => {
      const displayElement = await driver.findElement(By.css('.display'))
      const displayText = await displayElement.getText()

      expect(displayText).to.equal('20')
    })
  })
  
  it('Divide by 0', async function () {
      await driver.get('https://www.online-calculator.com/full-screen-calculator/')

      await digit4Element.click()
      await operatorDivision.click()
	  await digit0Element.click()
      await operatorEquals.click()

	await retry(async () => {
      const displayElement = await driver.findElement(By.css('.display'))
      const displayText = await displayElement.getText()

      expect(displayText).to.equal('Error')
    })
  })
  
  it('CE: Clear Screen', async function () {
      await driver.get('https://www.online-calculator.com/full-screen-calculator/')

	await retry(async () => {
      const operatorCE = await driver.findElement(By.css('.operator-CE'))
      const displayText = await displayElement.getText()

      expect(displayText).to.equal('0')
    })
  })

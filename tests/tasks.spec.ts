import {test, expect} from '@playwright/test'
import { faker } from '@faker-js/faker'

test('deve poder cadastrar uma nova tarefa', async ( {page} ) => {

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill(faker.lorem.words())
    //await inputTaskName.press('Enter') Se quizesse cadastrar a tarefa usando a tecla Enter
    //await page.click('xpath=//button[contains(text(), "Create")]') // outra estrategia com xpath
    await page.click('css=button >> text=Create')

})


import {test, expect} from '@playwright/test'

test('deve poder cadastrar uma nova tarefa', async ( {page, request} ) => {

    const taskName = 'Ler um livro de Typescript'

    await request.delete('http://localhost:3333/helper/tasks/' + taskName)

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill(taskName)
    //await inputTaskName.press('Enter') Se quizesse cadastrar a tarefa usando a tecla Enter
    //await page.click('xpath=//button[contains(text(), "Create")]') // outra estrategia com xpath
    await page.click('css=button >> text=Create')

    const target = page.locator(`css=.task-item p >> text=${taskName}`)
    await expect(target).toBeVisible()

})


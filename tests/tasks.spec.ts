import { test, expect, APIRequestContext } from '@playwright/test'

import { TaskModel } from './fixtures/task.model'

async function deleteTaskByHelper(request: APIRequestContext, taskName: string) {
    await request.delete('http://localhost:3333/helper/tasks/' + taskName)
}

test('deve poder cadastrar uma nova tarefa', async ({ page, request }) => {

    const task: TaskModel = {
        name: 'Ler um livro de Typescript',
        is_done: false
    }

    await deleteTaskByHelper(request, task.name)

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill(task.name)

    await page.click('css=button >> text=Create')

    const target = page.locator(`css=.task-item p >> text=${task.name}`)
    await expect(target).toBeVisible()
})

test('nao deve permitir tarefa duplicada', async ({ page, request }) => {

    const task: TaskModel = {
        name: 'Criar artigo no Medium',
        is_done: false
    }

    await deleteTaskByHelper(request, task.name)

    const newTask = await request.post('http://localhost:3333/tasks', { data: task })
    expect(newTask.ok()).toBeTruthy()
    

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill(task.name)

    await page.click('css=button >> text=Create')

    const target = page.locator('.swal2-html-container')
    await expect(target).toHaveText('Task already exists!')
})


import { test, expect } from '@playwright/test';

const urlInput = '#url-input';
const searchButton = "button[type='submit']";
const messageElement = '.ApiExplorer-module__message--e4oy9';
const jsonViewer = '.JsonViewer-module__code--2XOHn';
const rawJsonInput = 'label > input';
const name = 'pikachu';
const id = 25;

test.describe('Búsqueda de Pokémon en PokeAPI', () => {
  test('Debe buscar un Pokémon usando el campo de búsqueda', async ({ page }) => {
    // Paso 1: Visitar la página de PokeAPI
    await page.goto('https://pokeapi.co/');

    // Paso 2: Escribir el nombre del Pokémon en el campo de búsqueda
    await page.locator(urlInput).fill(`pokemon/${name}`);

    // Paso 3: Hacer clic en el botón de búsqueda
    await page.locator(searchButton).click();

    // Paso 4: Verificar que el resultado contiene el nombre del Pokémon
    await expect(page.locator(messageElement)).toContainText(name);

    // Paso 5: Hacer clic en 'View Raw JSON'
    await page.locator(rawJsonInput).click();

    // Paso 6: Extraer el JSON del visor
    const jsonText = await page.locator(jsonViewer).textContent();
    const jsonResponse = JSON.parse(jsonText);

    // Paso 7: Verificar que el JSON tiene los valores esperados
    expect(jsonResponse).toHaveProperty('name', name);
    expect(jsonResponse).toHaveProperty('id', id);

    // Paso 8: Llamar a la API y obtener datos adicionales
    const apiResponse = await page.request.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const apiData = await apiResponse.json();

    // Paso 9: Mostrar propiedades en la consola
    console.log(`Primera habilidad: ${apiData.abilities[0].ability.name}`);
    console.log(`Segunda habilidad: ${apiData.abilities[1].ability.name}`);
    console.log(`Peso: ${apiData.weight} kg`);

    // Paso 10: Comparar JSONs obtenidos de la UI y la API
    expect(apiData.name).toBe(jsonResponse.name);
    expect(apiData.id).toBe(jsonResponse.id);
    expect(apiData.height).toBe(jsonResponse.height);
    expect(apiData.base_experience).toBe(jsonResponse.base_experience);
    expect(apiData.abilities.length).toBe(jsonResponse.abilities.length);
    for (let i = 0; i < apiData.abilities.length; i++) {
      expect(apiData.abilities[i].ability.name).toBe(jsonResponse.abilities[i].ability.name);
    }
  });
});

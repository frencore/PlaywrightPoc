const { test, expect } = require('@playwright/test');

// Función auxiliar para obtener datos de la API
async function getPokemonData(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return response.json();
}

test.describe('Pruebas de API', () => {
    test('Debe obtener y usar datos de Ditto', async () => {
        const dittoData = await getPokemonData('ditto');
        
        console.log('Primera habilidad:', dittoData.abilities[0].ability.name);
        console.log('Segunda habilidad:', dittoData.abilities[1].ability.name);
        console.log('Peso:', dittoData.weight + 'kg');
        
        expect(dittoData).toHaveProperty('abilities');
        expect(dittoData).toHaveProperty('weight');
    });

    test('Debe obtener y usar datos de Pikachu', async () => {
        const pikachuData = await getPokemonData('pikachu');
        
        console.log('Primera habilidad:', pikachuData.abilities[0].ability.name);
        console.log('Segunda habilidad:', pikachuData.abilities[1].ability.name);
        console.log('Peso:', pikachuData.weight + 'kg');
        
        expect(pikachuData).toHaveProperty('abilities');
        expect(pikachuData).toHaveProperty('weight');
    });
});

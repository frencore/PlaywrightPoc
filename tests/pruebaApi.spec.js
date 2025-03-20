const { test, expect } = require('@playwright/test');

/**
 * Obtiene los datos de un Pokémon desde la PokeAPI.
 * @param {string} pokemon - Nombre del Pokémon a consultar.
 * @returns {Promise<Object>} - Retorna un objeto con los datos del Pokémon.
 */
async function getPokemonData(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return response.json();
}

test.describe('Pruebas de API', () => {
    /**
     * Prueba que obtiene los datos de Ditto y valida sus propiedades.
     */
    test('Debe obtener y usar datos de Ditto', async () => {
        const dittoData = await getPokemonData('ditto');
        
        // Imprime en consola las habilidades y el peso de Ditto
        console.log('Primera habilidad:', dittoData.abilities[0].ability.name);
        console.log('Segunda habilidad:', dittoData.abilities[1].ability.name);
        console.log('Peso:', dittoData.weight + 'kg');
        
        // Verifica que los datos obtenidos contienen las propiedades esperadas
        expect(dittoData).toHaveProperty('abilities');
        expect(dittoData).toHaveProperty('weight');
    });

    /**
     * Prueba que obtiene los datos de Pikachu y valida sus propiedades.
     */
    test('Debe obtener y usar datos de Pikachu', async () => {
        const pikachuData = await getPokemonData('pikachu');
        
        // Imprime en consola las habilidades y el peso de Pikachu
        console.log('Primera habilidad:', pikachuData.abilities[0].ability.name);
        console.log('Segunda habilidad:', pikachuData.abilities[1].ability.name);
        console.log('Peso:', pikachuData.weight + 'kg');
        
        // Verifica que los datos obtenidos contienen las propiedades esperadas
        expect(pikachuData).toHaveProperty('abilities');
        expect(pikachuData).toHaveProperty('weight');
    });
});

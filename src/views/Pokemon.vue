<template>
    <div>
        <div class="bg-gray-100">
            <h2 class="text-center text-2xl font-bold mb-8">Test fetch API</h2>

            {{ isLoading }}
            <div class="grid grid-cols-6 gap-4">
                <div
                    :key="`pokemon-${index}`"
                    v-for="(pokemon, index) in pokemonsList"
                    class="bg-white shadow-lg rounded-lg p-3 text-center"
                >
                    <img
                        :src="pokemon.avatar"
                        class="mx-auto w-10/12"
                        :alt="pokemon.name"
                    />
                    {{ pokemon.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            pokemonsList: [],
        }
    },

    mounted() {
        this.fetchPokemons()
    },

    methods: {
        async fetchPokemons() {
            let pokemons = []

            this.isLoading = true

            for (let i = 1; i <= 104; i++) {
                let pokemon = await this.getPokemonData(i)

                pokemons.push({
                    name: pokemon.name,
                    avatar: pokemon.sprites.front_default,
                })
            }

            this.isLoading = false
            this.pokemonsList = pokemons
        },

        async getPokemonData(id) {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const res = await fetch(url)
            const pokemon = await res.json()
            return pokemon
        }
    }
}
</script>

<style>

</style>
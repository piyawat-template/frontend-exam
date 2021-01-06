<template>
    <div>
        <div class="bg-gray-100 py-8">
            <h2 class="text-center text-2xl font-bold mb-8">Test fetch API</h2>

            <div class="container mx-auto px-5">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" v-if="isLoading">
                    <div
                        :key="`pokemon-skeleton-${n}`"
                        v-for="n in 18"
                        class="bg-white shadow-lg rounded-lg p-3 animate-pulse"
                    >
                        <div class="w-20 sm:w-24 h-20 sm:h-24 bg-gray-300 rounded-full mx-auto mb-3"></div>
                        <div class="w-full h-4 bg-gray-300 rounded-lg mx-auto mb-3"></div>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" v-else>
                    <div
                        :key="`pokemon-${index}`"
                        v-for="(pokemon, index) in pokemonsList"
                        class="bg-white shadow-lg rounded-lg p-3 text-center"
                    >
                        <img
                            :src="pokemon.avatar"
                            class="w-20 sm:w-24 h-20 sm:h-24 mx-auto bg-green-50 rounded-full mb-3"
                            :alt="pokemon.name"
                        />
                        <span class="capitalize font-bold">{{ pokemon.name }}</span>
                    </div>
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
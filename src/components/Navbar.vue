<template>
    <nav class="py-4">
        <div class="container mx-auto">
            <ul class="flex justify-center">
                <router-link
                    v-for="(link, index) in links"
                    :key="`nav-link-${index}`"
                    :to="{ name: link.routeName }"
                    v-slot="{ href, navigate, isExactActive }"
                >
                    <li
                        :class="[
                            'px-4 py-2',
                            isExactActive && 'text-green-600',
                        ]"
                    >
                        <a
                            :href="href"
                            @click="navigate"
                            class="font-bold text-xl"
                        >{{ link.name }}</a>
                    </li>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        links() {
            return [
                { name: 'Home', routeName: 'test' },
                { name: 'Pokemon', routeName: 'pokemon' },
                { name: 'Function 1', routeName: 'function1' },
                { name: 'Function 2', routeName: 'function2' },
                { name: 'Function 3', routeName: 'function3' },
            ]
        }
    }
}
</script>
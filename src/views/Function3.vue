<template>
    <div>
        <div class="bg-gray-100 py-8 text-center">
            <p v-for="(test, index) in testCase" :key="`test-case-${index}`">
                {{ test }} // Output: {{ findSecondMaxNumberInArray(test) }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testCase: [
                [],
                [1],
                [1,2,3],
                [1,1],
                [1,2,3,4,5,6],
                [1,5,3,2,5,10],
                [100,5,3,2,99],
                [35,5,3,2,5,100],
                [1,5,101,2,5,10],
                [10,10,9],
            ]
        }
    },

    methods: {
        findSecondMaxNumberInArray(arr) {
            const distinct = [...new Set(arr)]

            if (distinct.length < 1) {
                return 'null'
            }

            if (distinct.length === 1) {
                return distinct[0]
            }

            const maxNum = Math.max(...distinct)
            const filteredMaxOut = distinct.filter((num) => num < maxNum)
            const secondMax = Math.max(...filteredMaxOut)
            return secondMax
        }
    }
}
</script>
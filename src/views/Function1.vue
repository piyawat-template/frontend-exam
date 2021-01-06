<template>
    <div>
        <div class="bg-gray-100 py-8 text-center">
            {{ shops }}
        </div>
    </div>
</template>

<script>
import ExamData from '../json/exam-data.json'

export default {
    data() {
        return {
            shops: null
        }
    },

    mounted() {
        this.setShops()
    },

    methods: {
        setShops() {
            const filterShop = ExamData.filter(shop => !shop.is_editable_price)

            this.shops = filterShop.map(shop => {
                return {
                    name: shop.name,
                    totalSubProductWeight: shop.products.reduce((a, b) => a + (b['weight'] || 0), 0)
                }
            })
        }
    }
}
</script>
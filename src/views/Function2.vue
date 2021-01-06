<template>
    <div>
        <div class="bg-gray-100 py-8 text-center">
            <p>{{ convertDataTime(date, 'd/m/Y HH:mm') }}</p>
            <p>{{ convertDataTime(date, 'd M Y', 2, 'th') }}</p>
            <p>{{ getDateInMonth() }}</p>
            <p>{{ getCurrentWeek() }}</p>
            <p>{{ new Date(date).getTime() / 1000 }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: '2020-08-10T14:54:52+07:00'
        }
    },

    methods: {
        padNum(n, size) {
            let s = String(n)
            while (s.length < (size || 2)) {
                s = '0' + s
            }
            return s
        },

        convertDataTime(dateStr, format = 'Y-m-d', toFixed = 2, lang = 'en-GB') {
            const date = new Date(dateStr)
            const option = {
                Y: date.toLocaleDateString(lang, { year: 'numeric' }).replace('พ.ศ. ', ''),
                M: date.toLocaleDateString(lang, { month: 'long' }),
                m: this.padNum(date.toLocaleDateString(lang, { month: 'numeric' }), toFixed),
                d: this.padNum(date.toLocaleDateString(lang, { day: 'numeric' }), toFixed),
                HH: date.toLocaleTimeString(lang, { hour: '2-digit' }),
                mm: date.toLocaleTimeString(lang, { minute: '2-digit' }),
            }
            let newDateStr = format

            for (let key in option) {
                if (format.includes(key)) {
                    newDateStr = newDateStr.replace(key, option[key])
                }
            }

            return newDateStr
        },

        getDateInMonth() {
            const current = new Date(this.date)
            const year = new Date(current).getFullYear()
            const month = new Date(current).getMonth()

            return new Date(year, month + 1, 0).getDate()
        },

        getCurrentWeek() {
            const current = new Date(this.date)
            const year = new Date(current).getFullYear()
            const month = new Date(current).getMonth()
            const firstDay = new Date(year, month, 1).getDay()
            return Math.ceil((current.getDate() + firstDay) / 7)
        }
    }
}
</script>
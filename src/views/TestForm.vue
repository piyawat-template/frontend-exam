<template>
    <div>
        <div class="mx-auto bg-gray-100 sm:max-w-lg md:max-w-3xl p-5 sm:rounded-lg">
            <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <form class="mb-5" @submit.prevent="handleSubmit(onSubmit)">
                    <h2 class="text-center text-2xl font-bold mb-8">Test form and validation</h2>

                    <ValidationProvider
                        name="First name"
                        rules="required"
                        v-slot="{ errors }"
                        tag="div"
                        class="mb-5"
                    >
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 flex items-center md:justify-end mr-3">
                                <label for="firstName" class="font-bold">First Name</label>
                            </div>
                            <div class="md:w-3/4">
                                <input
                                    id="firstName"
                                    type="text"
                                    v-model="form.firstName"
                                    placeholder="Please fill first name"
                                    :class="[
                                        'block w-full p-2 rounded border focus:border-blue-300 focus:outline-none',
                                        errors[0] && 'border-red-600'
                                    ]"
                                />
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 mr-3"></div>
                            <div class="md:w-3/4">
                                <span class="text-red-600">{{ errors[0] }}</span>
                            </div>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        name="Last name"
                        rules="required"
                        v-slot="{ errors }"
                        tag="div"
                        class="mb-5"
                    >
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 flex items-center md:justify-end mr-3">
                                <label for="lastName" class="font-bold">Last Name</label>
                            </div>
                            <div class="md:w-3/4">
                                <input
                                    id="lastName"
                                    type="text"
                                    v-model="form.lastName"
                                    placeholder="Please fill last name"
                                    :class="[
                                        'block w-full p-2 rounded border focus:border-blue-300 focus:outline-none',
                                        errors[0] && 'border-red-600'
                                    ]"
                                />
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 mr-3"></div>
                            <div class="md:w-3/4">
                                <span class="text-red-600">{{ errors[0] }}</span>
                            </div>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        name="E-mail"
                        rules="required|email"
                        v-slot="{ errors }"
                        tag="div"
                        class="mb-5"
                    >
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 flex items-center md:justify-end mr-3">
                                <label for="email" class="font-bold">E-mail</label>
                            </div>
                            <div class="md:w-3/4">
                                <input
                                    id="email"
                                    type="email"
                                    v-model="form.email"
                                    placeholder="Please fill E-mail"
                                    :class="[
                                        'block w-full p-2 rounded border focus:border-blue-300 focus:outline-none',
                                        errors[0] && 'border-red-600'
                                    ]"
                                />
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 mr-3"></div>
                            <div class="md:w-3/4">
                                <span class="text-red-600">{{ errors[0] }}</span>
                            </div>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        name="Password"
                        rules="required"
                        v-slot="{ errors }"
                        tag="div"
                        class="mb-5"
                        vid="confirm"
                    >
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 flex items-center md:justify-end mr-3">
                                <label for="password" class="font-bold">Password</label>
                            </div>
                            <div class="md:w-3/4">
                                <input
                                    id="password"
                                    type="password"
                                    v-model="form.password"
                                    placeholder="Please fill password"
                                    :class="[
                                        'block w-full p-2 rounded border focus:border-blue-300 focus:outline-none',
                                        errors[0] && 'border-red-600'
                                    ]"
                                />
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 mr-3"></div>
                            <div class="md:w-3/4">
                                <span class="text-red-600">{{ errors[0] }}</span>
                            </div>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        name="Verify password"
                        rules="required|password:@confirm"
                        v-slot="{ errors }"
                        tag="div"
                        class="mb-5"
                    >
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 flex items-center md:justify-end mr-3">
                                <label for="verifyPassword" class="font-bold">Verify Password</label>
                            </div>
                            <div class="md:w-3/4">
                                <input
                                    id="verifyPassword"
                                    type="password"
                                    v-model="form.verifyPassword"
                                    placeholder="Please fill verify password"
                                    :class="[
                                        'block w-full p-2 rounded border focus:border-blue-300 focus:outline-none',
                                        errors[0] && 'border-red-600'
                                    ]"
                                />
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 mr-3"></div>
                            <div class="md:w-3/4">
                                <span class="text-red-600">{{ errors[0] }}</span>
                            </div>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        name="Gender"
                        rules="required"
                        v-slot="{ errors }"
                        tag="div"
                        class="mb-5"
                    >
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 flex items-center md:justify-end mr-3">
                                <label for="gender" class="font-bold">Gender</label>
                            </div>
                            <div class="md:w-3/4">
                                <select
                                    id="gender"
                                    v-model="form.gender"
                                    :class="[
                                        'block w-full p-2 rounded border focus:border-blue-300 focus:outline-none',
                                        errors[0] && 'border-red-600'
                                    ]"
                                >
                                    <option value="" disabled>Please select a gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row w-full">
                            <div class="md:w-1/4 mr-3"></div>
                            <div class="md:w-3/4">
                                <span class="text-red-600">{{ errors[0] }}</span>
                            </div>
                        </div>
                    </ValidationProvider>

                    <div class="flex flex-col md:flex-row w-full">
                        <div class="md:w-1/4 mr-3"></div>
                        <div class="md:w-3/4">
                            <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-6 rounded-md">Submit</button>
                        </div>
                    </div>
                </form>
            </ValidationObserver>

            <div v-if="isShowResult" class="flex flex-col md:flex-row w-full">
                <div class="md:w-1/4 mr-3"></div>
                <div class="md:w-3/4">
                    <div class="bg-gray-200 rounded-lg p-3">
                        <h3 class="text-xl font-bold text-center border-b border-gray-300 mb-3 pb-1">Result</h3>
                        <div>
                            <p>
                                First Name : {{ form.firstName }}
                            </p>
                            <p>
                                Last Name : {{ form.lastName }}
                            </p>
                            <p>
                                E-mail : {{ form.email }}
                            </p>
                            <p>
                                Gender : {{ form.gender }}
                            </p>
                        </div>
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
            form: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                verifyPassword: '',
                gender: '',
            },
            isShowResult: false,
        }
    },

    methods: {
        onSubmit() {
            this.isShowResult = true
        }
    }
}
</script>

<style>

</style>
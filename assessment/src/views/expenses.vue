<template>
    <div class="signup">
        <div class="grid gap-3 xl:grid-cols-3 lg:grid-cols-2 md:px-5 lg:p-5 lg:px-12">
            <div class="hero-section-left mb-5">
                <img src="../assets/img/Fundall-MintGreen-Lockup.png" alt="" />
                <div class="flex flex-col justify-center p-0 m-1 mt-10 lg:mt-7">
                    <div class="profile-section w-50">
                        <div class="flex md:flex-nowrap flex-wrap items-center">
                            <div class="profile-avater rounded-[18px] bg-gray-300 col w-20 mr-5 h-[70px] flex items-center justify-center">
                                <div class="relative bg-white h-[100%] rounded-[10px]">
                                    <img :src="updated_avatar" alt="" class="m-0 h-full w-full" />
                                    <Avatarmodal class="absolute -top-4 -left-3 w-20 h-30" />
                                </div>
                            </div>
                            <div class="col-span-2">
                                <p class="capitalize text-2xl font-bold text-fundallblack">{{user.firstname}} {{user.lastname}}</p>
                                <p class="text-fundallblack mt-1 text-lg font-normal">{{user.email}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="target mt-8 mb-10">
                        <p class="capitalize text-fundallblack font-normal text-lg">target monthly Expenses</p>
                        <p class="price text-fundallblack text-3xl font-bold" v-html=" '#'+ updated_target"></p>
                        <div class="range bg-gray-100 md:w-80 xs:w-full mt-3 rounded-lg">
                            <div class="range-loader rounded bg-fundallgreen h-full ro w-20 p-1"></div>
                        </div>
                    </div>
                    <summarytable :expensess_history="expensess_history" />
                </div>
            </div>
            <div class="md:col-span-2 w-full xl:w-[90%] ml-auto form-section px-1 lg:px-1 mr-0 bg-fundallgray rounded-lg shadow lg:px-10 py-5 px-3">
                <div class="top-header bg-white shadow p-5 rounded-lg flex relative">
                    <div>
                        <p class="text-fundallgreen text-xl font-bold">Welcome back, <span class="text-fundallblack">Babatunde</span></p>
                        <p class="text-xs text-fundallblack">Now, let’s get your expenses for this month</p>
                    </div>
                    <img src="../assets/img/jump.png" alt="" class="absolute -top-7 right-2 md:block hidden" />
                </div>
                <form action="" class="px-1 md:p-5" @submit.prevent="saveExpenses">
                    <div class="grid grid-cols-4 gap-8">
                        <div class="mb-6 col-span-3 mt-4">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Target monthly expenses</label>

                            <input
                                type="text"
                                id="base-input"
                                v-model="monthly_target"
                                class="border border-gray-300 text-gray-900 font-normal text-lg rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-8">
                        <div class="mb-6 col-span-3">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Date</label>
                            <input
                                type="date"
                                id="base-input"
                                v-model="target_date"
                                class="border border-gray-300 text-gray-900 font-normal text-lg rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <p class="capitalize font-normal text-fundallblack text-sm mb-5">today's expenses</p>
                    <div v-if="expensess_history">
                        <div class="grid grid-cols-5 gap-2" :key="index" v-for="(expense, index) in today_expensess">
                            <div class="mb-6 col-span-3">
                                <input
                                    type="text"
                                    placeholder="Expenses"
                                    id="base-input"
                                    ref="expense_name"
                                    v-model="expense.name"
                                    class="border font-light border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                />
                            </div>
                            <div class="mb-6 col-span-2">
                                <input
                                    @change="addprice"
                                    type="number"
                                    placeholder="price"
                                    v-model="expense.price"
                                    id="price"
                                    ref="expense_price"
                                    class="border border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="grid grid-cols-5 gap-2" :key="index" v-for="(expense, index) in expensess_history">
                            <div class="mb-6 col-span-3">
                                <input
                                    type="text"
                                    placeholder="Expenses"
                                    id="base-input"
                                    ref="expense_name"
                                    v-model="expense.name"
                                    class="border font-light border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                />
                            </div>
                            <div class="mb-6 col-span-2">
                                <input
                                    @change="addprice"
                                    type="number"
                                    placeholder="price"
                                    v-model="expense.price"
                                    id="price"
                                    ref="expense_price"
                                    class="border border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="total flex md:justify-between items-center">
                        <div class="counter">
                            <p class="text-2xl font-semibold bg-gray-300 rounded py-1 cursor-pointer hover:bg-gray-200 px-6" @click="expensessFormUpdate">+</p>
                        </div>
                        <div class="tot-inp flex w-50 items-center">
                            <p class="capitalize font-light text-black text-sm">total actual expenses: <span class="font-bold text-xl">#</span></p>
                            <input
                                type="text"
                                placeholder="Total"
                                :value="total_price"
                                class="w-20 bo font-normal border-gray-300 text-gray-400 rounded focus:ring-fundallgreen focus:border-fundallgreen block p-2.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="block mx-auto font-bold bg-fundallgreen border-2 mt-7 border-white text-black text-sm rounded-[15px] focus:ring-fundallgreen focus:border-fundallgreen block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                    >
                        SAVE TODAY'S EXPENSESE
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import summarytable from "../components/summarytable.vue";
    import Avatarmodal from "../components/avatarmodal.vue";
    import { ref } from "@vue/reactivity";

    export default {
        components: { summarytable, Avatarmodal },
        computed: {
            ...mapState({
                user: (state) => state.user,
            }),
        },
        setup() {
            const monthly_target = ref("");
            const updated_target = ref("");
            const updated_avatar = ref("");
            const target_date = ref("");
            const expensessForm = ref(0);
            const today_expensess = ref([]);
            const today_expense = ref({ name: "", price: null });
            const total_price = ref(0);
            const expensess_price = ref();
            const daily_expensess = ref([]);
            const daily_expense = ref();
            const expensess_history = ref();

            return {
                monthly_target,
                updated_avatar,
                expensessForm,
                today_expense,
                today_expensess,
                total_price,
                updated_target,
                target_date,
                expensess_price,
                daily_expense,
                daily_expensess,
                expensess_history,
            };
        },

        methods: {
            saveExpenses() {
                let expensess = this.today_expensess;
                let dailyExpense = this.daily_expense;
                dailyExpense = { date: this.updated_date, price: this.total_price };
                this.daily_expensess.push({ ...dailyExpense });
                console.log(this.daily_expensess);
                console.log("above is value");
                var result = encodeURIComponent(JSON.stringify(this.daily_expensess));
                if (localStorage.getItem("today_expensess")) {
                    var data = localStorage.getItem("today_expensess");
                    data = decodeURIComponent(data);
                    data = JSON.parse(data);
                    var d = data;
                    console.log(data);
                    d.push({ ...dailyExpense });
                    console.log(d);
                    var newdata = encodeURIComponent(JSON.stringify(d));
                    console.log(newdata);
                    localStorage.setItem("today_expensess", newdata);
                } else {
                    localStorage.setItem("today_expensess", result);
                }
                console.log(result);
                localStorage.setItem("monthly_target", this.monthly_target);
                localStorage.setItem("target_date", this.target_date);
                localStorage.setItem("total_price", this.total_price);
                console.log(dailyExpense);
                expensess.filter((price) => (this.total_price += price.price));
                console.log(expensess);
                console.log(this.daily_expensess);
                window.location.href = "/expenses";
            },
            expensessFormUpdate() {
                this.today_expensess.push({ ...this.today_expense });
                this.expensessForm++;
            },

            addprice() {
                let expensess = this.today_expensess;
                let newtotal = 0;
                expensess.filter((price) => (newtotal += price.price));
                this.total_price = newtotal;
            },
            getExpensessHistory() {
                var data = localStorage.getItem("today_expensess");
                data = decodeURIComponent(data);
                data = JSON.parse(data);
                this.expensess_history = data;
                console.log(this.expensess_history);
            },
        },

        created() {
            this.today_expensess.filter((price) => (this.total_price += price.price));
            this.updated_avatar = localStorage.getItem("newavatar");
            for (let i = 0; i <= 2; i++) {
                this.expensessFormUpdate();
            }
            this.updated_target = localStorage.getItem("monthly_target");
            this.monthly_target = this.updated_target;
            this.updated_date = localStorage.getItem("target_date");
            this.target_date = this.updated_date;
            this.expensess_price = localStorage.getItem("total_price");
            this.getExpensessHistory();
        },
    };
</script>

<style></style>

import SummaryTable from "./SummaryTable";
import Notification from "./notification";
import { useEffect, useState } from "react";
import AvaterModal from "./AvaterModal";
const Expenses = () => {
    const [user, setUser] = useState();

    const getUser = ()=>{
        let token = localStorage.getItem("token")
        let logUser = localStorage.getItem("user");
        if(token && logUser){
            var newUser = decodeURIComponent(logUser)
            const user = JSON.parse(newUser);
            setUser(user)
            console.log(

            );
            return user
        }
    }
    useEffect(()=>{
        getUser() 
        handleSetuser()
    })
    const handleSetuser = ()=>{
        setUser(user)

    }
   console.log(getUser());
    const [expensess_history, setExpensess_history] = useState("");
    
    return (
        <div class="signup">

        <div class="grid gap-3 xl:grid-cols-3 lg:grid-cols-2 md:px-5 lg:p-5 lg:px-12">
            <div class="hero-section-left mb-5">
                <img src={require("../assets/img/Fundall-MintGreen-Lockup.png")} alt="" />
                <div class="flex flex-col justify-center p-0 m-1 mt-10 lg:mt-7">
                    <div class="profile-section w-50">
                        <div class="flex md:flex-nowrap flex-wrap items-center">
                            <div class="profile-avater rounded-[18px] bg-gray-300 col w-20 mr-5 h-[70px] flex items-center justify-center">
                                <div class="relative bg-white h-[100%] rounded-[10px]">
                                    <img src="updated_avatar" alt="" class="m-0 h-full w-full" />
                                    <AvaterModal class="absolute -top-4 -left-3 w-20 h-30" />
                                </div>
                            </div>
                            <div class="col-span-2">

                                <p class="capitalize text-2xl font-bold text-fundallblack">{user.firstname} {user.lastname}</p>
                                <p class="text-fundallblack mt-1 text-lg font-normal">{user.email}</p>
                            </div>
                        </div>
                    </div>
                    <div class="target mt-8 mb-10">
                        <p class="capitalize text-fundallblack font-normal text-lg">target monthly Expenses</p>
                        <p class="price text-fundallblack text-3xl font-bold" v-html=" '₦'+ updated_target"></p>
                        <div class="range bg-gray-100 md:w-80 xs:w-full mt-3 rounded-lg">
                            <div class="range-loader rounded bg-fundallgreen h-full ro w-20 p-1"></div>
                        </div>
                    </div>
                    <SummaryTable />
              
                   
                </div>
            </div>
            <div class="md:col-span-2 w-full xl:w-[90%] ml-auto form-section px-1 lg:px-1 mr-0 bg-fundallgray rounded-lg shadow lg:px-10 py-5 px-3">
                <div class="top-header bg-white shadow p-5 rounded-lg flex relative">
                    <div>
                        <p class="text-fundallgreen text-xl font-bold">Welcome back, <span class="text-fundallblack">{user.firstname}</span></p>
                        <p class="text-xs text-fundallblack">Now, let’s get your expenses for this month</p>
                    </div>
                    <img src={require("../assets/img/jump.png")} alt="" class="absolute -top-7 right-2 md:block hidden" />
                </div>
                <form action="" class="px-1 md:p-5" > 
                    <div class="grid grid-cols-4 gap-8">
                        <div class="mb-6 col-span-3 mt-4">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Target monthly expenses</label>

                            <input
                                type="text"
                                id="base-input"
                                value="monthly_target"
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
                                value="target_date"
                                class="border border-gray-300 text-gray-900 font-normal text-lg rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <p class="capitalize font-normal text-fundallblack text-sm mb-5">today's expenses</p>
                    <div v-if="expensess_history">
                        <div class="grid grid-cols-5 gap-2"  v-for="(expense, index) in today_expensess">
                            <div class="mb-6 col-span-3">
                                <input
                                    type="text"
                                    placeholder="Expenses"
                                    id="base-input"
                                    // ref="expense_name"
                                    value="expense.name"
                                    class="border font-light border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                />
                            </div>
                            <div class="mb-6 col-span-2">
                                <input
                                    // @change="addprice"
                                    type="number"
                                    placeholder="price"
                                    value="expense.price"
                                    id="price"
                                    // ref="expense_price"
                                    class="border border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="grid grid-cols-5 gap-2"  v-for="(expense, index) in today_expensess">
                           
                            <div class="mb-6 col-span-3">
                                <input
                                    type="text"
                                    placeholder="Expenses"
                                    id="base-input"
                                    // ref="expense_name"
                                    value="expense.name"
                                    class="border font-light border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                />
                            </div>
                            <div class="mb-6 col-span-2">
                                <input
                                    // @change="addprice"
                                    type="number"
                                    placeholder="price"
                                    value="expense.price"
                                    id="price"
                                    // ref="expense_price"
                                    class="border border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="total flex md:justify-between items-center">
                        <div class="counter">
                            <p class="text-2xl font-semibold bg-gray-300 rounded py-1 cursor-pointer hover:bg-gray-200 px-6" >+</p>
                        </div>
                        <div class="tot-inp flex w-50 items-center">
                            <p class="capitalize font-light text-black text-sm">total actual expenses: <span class="font-bold text-xl">#</span></p>
                            <input
                                type="text"
                                placeholder="Total"
                                value="total_price"
                                class="w-20 bo font-normal border-gray-300 text-gray-400 rounded focus:ring-fundallgreen focus:border-fundallgreen block p-2.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    
                    <button
                        type="submit"
                        class="block mx-auto font-bold bg-fundallgreen border-2 mt-7 border-white text-black text-sm rounded-[15px] focus:ring-fundallgreen focus:border-fundallgreen block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                    >
                        SAVE TODAY'S EXPENSES
                    </button>
                    </div>  
                </form>
                {/* <Notification/> */}
            </div>
        </div>
    </div>
    );
};

export default Expenses;

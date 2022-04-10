import { useState } from "react";

const SummaryTable = () => {
    const [expense, setExpense] = useState("");
    return ( 
        <div className="overflow-scroll h-[400px] rounded">
        <div className="flex flex-col w-full xs:max-w-40 xl:w-50 lg:w-[90%] min-h-10">
            <div className="overflow-x-scroll bg-white shadow-md sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-scroll  min-h-[300px] relative">
                        <p className="capitalize text-xs text-fundallblack m-2 font-bold p-2">daily expenses summary</p>

                        <table className="min-w-full m-1 divide-gray-200 table-fixed dark:divide-gray-700 sticky top-0" v-if="expensess_history">
                            <thead className=" dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Date
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Amount
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y px-2 divide-gray-200 dark:bg-gray-800 mx-2 dark:divide-gray-700 scroll"  v-for="(expense, idx) in expensess_history">
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 border-b">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white flex items-center"><img src="../assets/img/Mask.png" alt="" className="mr-3" /> {expense.date}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 dark:text-white" v-html="expense.price"></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="epmty-img flex justify-center w-[100%] absolute top-[50%] translate-y-[-50%]" v-else>
                            <img src="../assets/img/Artwork.png" alt="" />
                        </div>
                        <div className="pagination mt-5">
                            <p className="flex items-center justify-center">
                                <span className="text-lg font-bold border m-1 rounded px-[10px] text-fundallblack">1</span> of <span className="text-lg font-bold m-1 mr-2 text-fundallblack" id="total">5</span>
                                <span className="s"> <img src="../assets/img/prev1.png" alt="" className="p-1" /> </span>
                                <span> <img src="../assets/img/next1.png" alt="" className="p-1" /> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default SummaryTable;
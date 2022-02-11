<template>
   <div class="overflow-x-scroll">
            <div class="flex flex-col xs:max-w-40 xl:w-50 lg:w-[100%]">
            <div class="overflow-x-scroll shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-scroll bg-white">
                        <p class="capitalize text-xs text-fundallblack m-2 font-bold">daily expenses summary</p>
                        <table class="min-w-full divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead class="bg-white dark:bg-gray-700">
                                <tr>
                                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Date
                                    </th>
                                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y px-2 divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 scroll">
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white">Apple Imac 27"</td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-500  dark:text-white">Desktop PC</td>
                                </tr>
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white">Apple MacBook Pro 17"</td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-500  dark:text-white">Laptop</td>
                                </tr>
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white">iPhone 13 Pro</td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-500  dark:text-white">Phone</td>
                                </tr>
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white">Apple Magic Mouse 2</td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-500  dark:text-white">Accessories</td>
                                </tr>
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white">Apple Watch Series 7</td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-500  dark:text-white">Accessories</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
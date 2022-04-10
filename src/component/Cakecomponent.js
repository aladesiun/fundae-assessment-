const Cakecomponent = () => {
    return ( 
        <div>
            <h1 className="uppercase text-center">cake shop</h1>
            <button
            disabled
                v-if="loading"
                type="button"
                className="bg-fundallgreen border mx-auto border-fundallgreen text-black text-xl rounded focus:ring-fundallgreen focus:border-fundallgreen block text-center px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
            >
               Buy cake
            </button>
        </div>
     );
}
 
export default Cakecomponent;   
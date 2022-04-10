import { Link    } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
             <nav className=" border-gray-200 px-2 md:px-5  py-2.5 rounded dark:bg-gray-800">
    <div className="container flex flex-wrap justify-between items-center mx-auto md:px-10 px-0">
       <router-link to="/">
       <img src="" alt=""/>
       <img src={require('../assets/img/Fundall-MintGreen-Lockup.png')} alt="" />
       
       </router-link>
        <div className="flex">
            
            <button
                data-collapse-toggle="mobile-menu-4"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-4"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path filerule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        filerule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <Link
                to="signin"
                className="text-black uppercase  hover:bg-green-700 focus:ring-4  font-semibold focus:ring-green-300 hover:text-white  rounded-lg text-sm px-3 py-1.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                sign in
            </Link>
            <Link
                to="signup"
                className="text-black uppercase bg-fundallgreen hover:bg-green-700 focus:ring-4  font-bold focus:ring-green-300 hover:text-white  rounded-lg text-sm px-3 py-1.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                sign up
            </Link>
            </ul>
        </div>
    </div>
</nav>
            <div className="home-content flex flex-col items-center justify-center mb-10">
                <img src={require('../assets/img/img1.png')} alt="" className="mb-10"/>
                <p className="font-bold text-3xl md:text-4xl cappitalize text-center mb-7">Fundall Expense Tracker</p>
                <p className="font-semibold text-2xl md:text-3xl cappitalize text-center mb-11"> Mini Project Frontend</p>
                <p className="font-bold text-xl my-5 mb-12 text-center" >by Babatunde Fashola</p>
            </div>
        </div>
     );
}
 
export default Home;
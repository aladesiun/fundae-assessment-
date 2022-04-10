import { useEffect } from "react";
import { Link } from "react-router-dom";
import Notification from "../notification";
import { useState } from "react";
import post from "../../store/index";
const Rigister = () => {
    const [User, setUser] = useState({
        firstname: "hello",
        lastname: "",
        email: "",
        password: "",
        Password_confirmation: "",
    });
    const [Loading, setLoading] = useState(false);
    const [notifySuccess, setnotifySuccess] = useState({status:false, message:""});
    const [notifyFailed, setnotifyFailed] = useState({status:false, message:""});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
  
    
    const signup = (e) => {
        // e.preventdefault();
        setLoading(true);
        if (User.Password_confirmation !== User.password) {
            setnotifyFailed("password dosn't match");
            setLoading(false);

            return false;
            
        }
        post.post({
            endpoint: "register",
            details: User,
        }).then((data) => {
            if (data.data.success) {
                setnotifySuccess({
                    ...notifySuccess,
                    status:true,
                    message:'welcome'
                })
                setTimeout(() => {
                    setnotifySuccess({
                        ...notifySuccess,
                        status:false,
                    })
                }, 3000);
            }
            var user_details = data.data.success.user;
            var result =  encodeURIComponent(JSON.stringify(user_details));
            var user_token= data.data.success.user.access_token;
            localStorage.setItem('token', user_token);
            localStorage.setItem('user', result);
            setLoading(false);
            window.location.href='/expenses';
            }).catch((error) => {
                var error_message = error.response.data.error.message;
                console.log();
                    setnotifyFailed(
                        {
                            ...notifyFailed,
                            status:true,
                            message:error_message
                        })
                        setTimeout(() => {
                            setnotifyFailed(
                                {
                                    ...notifyFailed,
                                    status:false,
                                })
                           }, 3000);
               
                setLoading(false);
            });
    };
    return (
        <div className="signup">
            <Notification className="fixed" notifyFailed={notifyFailed} notifySuccess={notifySuccess} />
            <div className="grid lg:grid-cols-1 lg:grid-cols-2 p-1 lg:p-5 lg:pr-12">
                <div className="hero-section-left mb-5 ">
                    <Link to="/">
                        <img src={require("../../assets/img/Fundall-MintGreen-Lockup.png")} className="mb-8" alt="" />
                    </Link>
                    <div className="flex flex-col items-center justify-center  p-0 m-1 lg:pl-10 lg:ml-10 lg:mt-7">
                        <div>
                            <img src={require("../../assets/img/img1.png")} className="mb-8" alt=""></img>
                            <p className="text-4xl font-bold mb-9">
                                <span className="text-fundallgreen">Welcome!</span> Let’s get to know you.
                            </p>
                            <p className="font-semibold text-lg">Your first step toward a better financial lifestyle starts here.</p>
                        </div>
                    </div>
                </div>
                <div className="form-section px-1  lg:px-10">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            signup(e);
                        }}
                        className=" bg-white shadow rounded py-10 px-2 lg:px-12 "
                    >
                        <div className="grid md:grid-cols-2 md:gap-8">
                            <div className="mb-6">
                                <label for="firstname" className="block mb-2 text-sm font-medium text-fundallgreen dark:text-gray-300">
                                    First Name
                                </label>
                                <input
                                    value={User.firstname}
                                    onChange={handleInputChange}
                                    name="firstname"
                                    type="text"
                                    id="firstname"
                                    className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                ></input>
                            </div>
                            <div className="mb-6">
                                <label for="lastname" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">
                                    Last Name
                                </label>
                                <input
                                    value={User.lastname}
                                    onChange={handleInputChange}
                                    name="lastname"
                                    type="text"
                                    id="lastname"
                                    className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                ></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">
                                    Email address
                                </label>
                                <input
                                    value={User.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    type="email"
                                    id="email"
                                    className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                ></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="mb-6">
                                <label for="password" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">
                                    password
                                </label>
                                <input
                                    value={User.password}
                                    onChange={handleInputChange}
                                    name="password"
                                    type="password"
                                    id="password"
                                    className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                ></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="mb-6">
                                <label for="password-confirm" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">
                                    confirm password
                                </label>
                                <input
                                    value={User.Password_confirmation}
                                    onChange={handleInputChange}
                                    name="Password_confirmation"
                                    type="password"
                                    id="password-confirm"
                                    className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                ></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="mb-6">
                                {Loading && (
                                    <button
                                        disabled
                                        type="button"
                                        className="bg-fundallgreen border border-fundallgreen text-black text-lg font-bold rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                    >
                                        <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                )}
                                {!Loading && (
                                    <input
                                        type="submit"
                                        value="sign up"
                                        id=""
                                        className="uppercase bg-fundallgreen border font-bold border-fundallgreen text-black text-lg rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                                    ></input>
                                )}
                            </div>
                        </div>
                        <p className="text-center lg:px-12 pt-4">
                            
                            Already have an account?
                            <Link to="/signin" className="text-fundallgreen">
                                Login Here
                            </Link>
                        </p>
                    </form>
                    <p className="text-center lg:px-12 pt-7 text-gray-400">
                        
                        by clicking on Login, you agree to our <span className="text-fundallgreen">Terms & conditions and privacy policy</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rigister;

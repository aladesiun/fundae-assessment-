import { useEffect } from "react";

const Notification = ({notifyFailed, notifySuccess}) => {
    

    
     useEffect(()=>{
        // checkFail(); 
     })
    return ( 

        <div className="fixed  right-[50%] translate-x-[50%] top-5">
            {notifySuccess.status && <div id="alert-1" v-if="notification.type == 1" className="flex p-4 mb-4 bg-white rounded-lg dark:bg-blue-200 shadow" role="alert">
   <svg className="flex-shrink-0 w-5 h-5 text-fundallgreen dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
   </svg>
   <div className="ml-3 text-sm font-medium text-fundallgreen dark:text-blue-800" >
       {notifySuccess.message}
   </div>
   <button
       type="button"
       className="ml-auto -mx-1.5 -my-1.5 bg-white text-fundallgreen rounded-lg focus:ring-1 focus:ring-fundallgreen p-1.5 hover:bg-fundallgreen hover:text-white inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300"
       data-collapse-toggle="alert-1"
       aria-label="Close"
   >
       <span className="sr-only">Close</span>
       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path
               fill-rule="evenodd"
               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
               clip-rule="evenodd"
           ></path>
       </svg>
   </button>
        </div>}
       

         {notifyFailed.status && <div id="alert-1" v-if="notification.type == 2" className="flex p-4 mb-4 bg-white rounded-lg dark:bg-blue-200 shadow" role="alert">
           <svg className="flex-shrink-0 w-5 h-5 text-red dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
           </svg>
           <div className="ml-3 text-sm font-medium text-red dark:text-blue-800">
               {notifyFailed.message}
           </div>
           <button
               type="button"
               className="ml-auto -mx-1.5 -my-1.5 bg-white text-red rounded-lg focus:ring-1 focus:ring-red p-1.5 hover:bg-red hover:text-white inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300"
               data-collapse-toggle="alert-1"
               aria-label="Close"
           >
               <span className="sr-only">Close</span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                   <path
                       fill-rule="evenodd"
                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                       clip-rule="evenodd"
                   ></path>
               </svg>
           </button>
               </div> }
       </div>
     );
}
 
export default Notification;
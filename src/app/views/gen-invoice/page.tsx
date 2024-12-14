
"use client"
import React from 'react';
const Page = () => {
    // const router = useRouter();
    // // const logout= async ()=>{
    // //     await deleteSession();
    // //     router.push("/");
    // // }
    // const formik = useFormik({
    //     initialValues: {
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //     },
    //     onSubmit: values => {
    //         console.log(JSON.stringify(values, null, 2));
    //     //   alert(JSON.stringify(values, null, 2));
    //     },
      // });    
      return (
        <div className="flex flex-row">
          <div className="flex basis-3/4 m-h-100vh flex-col">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="bg-green-400 h-5 rouded-md flex">lore</div>
            </div>
          </div>
          <div className="flex basis-1/4 m-h-100vh flex-col"></div>
        </div>
    );
};

export default Page;
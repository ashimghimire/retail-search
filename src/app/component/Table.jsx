import React from 'react';

const Table = () => {
    return (
        <div className="flex list bg-white m-10 mt-0 rounded-md m-h-12 p-3 flex-col">
        <div className="flex flex-row gap-2"><h2 className="font-bold text-xl w-[90%]">Top Store</h2> <div className=" flex items-center ">Share</div></div>
        <div className="flex w-full">  
            <table   className="table-auto w-full ">
                <thead className=" border border-1  border-slate-300 border-t-0 border-r-0 border-l-0">
                  <tr className="" align="left">
                    <th className="text-slate-400">Song</th>
                    <th className="text-slate-400">Artist</th>
                    <th className="text-slate-400">Year</th>
                    <th className="text-slate-400">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    <td>12232</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    <td>19232361</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    <td>2323</td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
    );
};

export default Table;
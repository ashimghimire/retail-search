import React from 'react';

const Card = (props) => {
    const {color,componentStack,stackGap,stackAlignment,pad}=props;
    return (
        <div style={{padding:pad}} className={`flex flex-col p-2 rounded-md gap-${stackGap}  bg-${color}-400  items-${stackAlignment} justify-start`}>
            {componentStack?.map((Item,index)=>
            <div className='w-full'  key={index}>
            {Item}
          </div>)}
        </div>
    );
};

export default Card;
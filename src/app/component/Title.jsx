import React from 'react';

const Title = (props) => {
    const {title,icon,bgColor}=props;
    console.log(bgColor);
    return (
          
            <div className="title flex w-full gap-1 flex flex-row items-center">
             <div className={`rounded-full bg-${bgColor}-500 p-1 w-8 h-8`}>
             {icon&&  <span className="material-icons">
                        {icon}</span>}</div>           
            <p>{title}</p></div>
        
    );
};

export default Title;
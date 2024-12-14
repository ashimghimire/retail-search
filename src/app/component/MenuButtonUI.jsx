import React from 'react';

const MenuButtonUI = () => {
    return (
        <div className="flex list bg-white rounded-md m-h-12 p-3 flex-row">
                    <div className="flex basis-3/4 flex-row gap-2">
                    <div><span className="material-icons">
                        image_aspect_ratio
                        </span></div>
                    <div>Store Sell ratio</div></div>
                    <div className="flex justify-end basis-1/4">...</div>
                </div>
    );
};

export default MenuButtonUI;
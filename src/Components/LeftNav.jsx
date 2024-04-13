import { useEffect } from "react";
import { useState } from "react";
import {  NavLink } from "react-router-dom";


const LeftNav = () => {


    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[]);

    console.log(categories);

    return (
        
        <div className="text-start">
        <h2 className="">All Categories</h2>
            {
                categories.map(category=>
                <NavLink className="p-4 text-start block cursor-pointer mb-3 no-underline text-lg font-semibold text-slate-700 hover:bg-slate-200" 
                key={category.id}>
                {category.name}
                </NavLink>)
            }
            
        </div>
    );
};

export default LeftNav;
//import React from 'react'
import Item from './Item'
import data from '../data.json'
import './Items.css'
import { useState, useEffect } from "react";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);
  
  return(
    <div className="items">
    {
      items.map((item) => (
        <Item data={item} key={item.id}></Item>      
      ))
    }    
    </div>
  )  
}
export default Items

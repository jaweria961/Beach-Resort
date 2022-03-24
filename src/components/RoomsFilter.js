
import React from 'react';
import {useContext}from 'react';
import {RoomContext} from '../context'

import Titles from '../components/Titles';

// Get all unique Values
const getUnique = (items,value) =>{
  return [...new Set(items.map(item => item[value]))];
}
export default function RoomsFilter({rooms}) {
  const context = useContext(RoomContext);
  const {
    handleChange,type,capacity,
    price,minPrice,maxPrice,minSize,
    maxSize,breakfast,pets
  }
    = context;
  
    // get unique types
let types = getUnique(rooms,'type');

types=['all',...types];

types =types.map((item,index)=>
{
  return <option value= {item} key={index}>{item}</option>
})
let people = getUnique(rooms, "capacity");
people = people.map((item, index) => (
  <option key={index} value={item}>
    {item}
  </option>
));


  return (
  
  <>
<section className="filter-container">
  <Titles title="search rooms"/>
  <form  className="filter-form">
         {/* select type */}
         <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* Guest Type */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}

    {/* room price */}
    <div className="form-group">
      <label htmlFor="price">

      Room Price ${price}
      </label>
      <input type="range" name="price" min={minPrice} max={maxPrice}  id="price" value={price} onChange={handleChange} className="form-control"/>
      
    </div>

  {/* size */}

    <div className="form-group">
      <label htmlFor="size"> Room Size</label>
      <div className="size-input">
        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
      </div>
 
    </div>

    {/* extras */}
    <div className="form-group">
      <div className="single-extra">
       
      <input type="checkbox" name="pe" id="breakfast" />
      <label htmlFor="breakfast">breakfast</label>
      </div>
      <div className="single-extra">
        
      <input type="checkbox" name="pe" id="breakfast" />
      <label htmlFor="breakfast">pets</label>
      </div>
    </div>
  </form>
</section>
  
  </>
  
  )
}

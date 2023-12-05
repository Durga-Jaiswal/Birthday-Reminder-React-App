import React from "react";
import './App.css'
function List({people}) {
    
  
    return (
      <>
        {people.map((people) => {
            const {id, image, name, age} = people;
            return (
                <article key={id} className='people' >
                    <img src={image} alt={name}></img>
                    <div class="flex">
                        <h4>{name}</h4>
                        <p>Age: {age}</p>
                    </div>
                </article>
            )
        })}
      </>
    )
  }
  
  export default List
import React from "react";

const StarList = ({stars}) =>{
 return(
        <div>
        {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
          </div>
    )
}
export default StarList
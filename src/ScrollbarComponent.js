import "./ScrollbarComponent.css"
import React from 'react'

function ScrollbarComponent({ selected, name }) {
  return (
    <div className={`component ${selected && 'selected'}`}>
        <p className="scrollbar">{name}</p>
    </div>
  )
}

export default ScrollbarComponent;
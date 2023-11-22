import React from 'react'
function CategoryCard({ categoryName, onClick }) {
  return (
    <div>
        <div className='cCard' onClick={onClick}>
          <p>{categoryName}</p>
        </div>
    </div>
  )
}

export default CategoryCard
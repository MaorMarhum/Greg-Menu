import React from 'react';

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const {id, title, img, desc, price, desc2} = menuItem
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo'/>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₪{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
              <p className='item-text'>{desc2}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
};

export default Menu;

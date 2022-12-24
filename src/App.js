import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const [message, setMessage] = useState("")

  const filterItems = (category) => {
    // if (category === 'all') {
    //   setMenuItems(items)
    //   return
    // }
    if(category === 'ארוחות בוקר') {
      setMessage(`ארוחות הבוקר מוגשות עם קפה קטן ושתייה קרה קטנה (תפוזים/גזר/לימונדה). שינוי או הגדלת שתייה כרוכה בתוספת תשלום.`)
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  
  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>תפריט</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems}/>
        <br></br>
        <h4>{message}</h4>
      </section>
    </main>
  )
}

export default App;

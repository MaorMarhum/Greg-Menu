import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [...new Set(items.map((item) => item.category))]

function App() {
  const initial = items.filter((item) => item.category === 'ארוחות בוקר')
  const [menuItems, setMenuItems] = useState(initial)
  const [categories, setCategories] = useState(allCategories)
  const [message, setMessage] = useState("")

  // const boker = () => {
  //   setMessage(`ארוחות הבוקר (זוגי/יחיד) מוגשות עם קפה קטן ושתייה קרה קטנה (תפוזים/גזר/לימונדה). שינוי או הגדלת שתייה כרוכה בתוספת תשלום.`)
  // }

  const filterItems = (category) => {
    if(category === 'ארוחות בוקר') {
      setMessage(`ארוחות הבוקר (זוגי/יחיד) מוגשות עם קפה קטן ושתייה קרה קטנה (תפוזים/גזר/לימונדה). שינוי או הגדלת שתייה כרוכה בתוספת תשלום.`)
    } else if (category === 'סלטים') {
      setMessage('מוגשים עם לחם הבית, טחינה וסלסת פלפלים.')
    } else {
      setMessage("")
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }


  if (items.length < 0 && message === 8) {
    setCategories("")
  }
  
  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>תפריט</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <h4>{message}</h4>
        {
          menuItems === initial ? <h4>ארוחות הבוקר (זוגי/יחיד) מוגשות עם קפה קטן ושתייה קרה קטנה (תפוזים/גזר/לימונדה). שינוי או הגדלת שתייה כרוכה בתוספת תשלום.</h4> : null
        }
        <br></br>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;

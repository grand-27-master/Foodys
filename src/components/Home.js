import {useState} from 'react';
import './styles.css';
import Menu from './api';
import MenuCard  from './Menucard';
import Navbar from './Navbar';

// convert obj to array
const uniqueList=[...new Set(Menu.map((curr_val)=>{
  return curr_val.category;
}))]

//console.log(uniqueList);


export default function Home()
{

    const [menu,setMenu]=useState(Menu);
    const [menuList]=useState(uniqueList);
   // console.log(menu);
   console.table(menu);

   const filterItems=(category)=>{
      const updatedList=Menu.filter((curr_val)=>{
          return curr_val.category===category;
      })
      setMenu(updatedList);
   }

    return (<>   
    <Navbar filterItems={filterItems} menuList={menuList}/>
    <MenuCard menu={menu}/>
    </>);
}
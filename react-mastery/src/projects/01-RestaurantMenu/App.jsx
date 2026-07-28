import ChickenBurger from "./assets/ChickenBurger.jpg";
import ChickenMeal from "./assets/ChickenMeal.webp";
import ChickenPizza from "./assets/ChickenPizza.jpg";
import VegSandwich from "./assets/VegSandwich.webp";
import MenuCard from './components/MenuCard';

const data=[ 

    { id:1,
     title:"ChickenBurger",
    img:ChickenBurger, 
    Rating:"5",
    isVeg: false }
    ,{ id:2, 
    title:"ChickenMeal",
    img:ChickenMeal,
    Rating:"5", 
    isVeg: false },
    { id:3, 
    title:"ChickenPizza", 
    img:ChickenPizza, 
    Rating:"5", 
    isVeg: false },  
    { id:4, 
    title:"VegSandwich",
     img:VegSandwich, 
    Rating:"5", 
    isVeg: true } ]

function App() {

  return (
    <>
     {data.map((item)=>(
    <MenuCard 
       key={item.id} 
       title={item.title} 
       img={item.img} 
       rating={item.Rating} 
       isVeg={item.isVeg}
       />
     ))}
     
    </>
  )
}

export default App

import '././App.css'
import Card from './card';
function Body2() {
    return (
      <div className='body2'>
        <input type="text" placeholder="Search Your Favourite Dish!" ></input>
        <button className='btn1'>Search</button>
       <div className='Menu_tag'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    
       </div>
      </div>
    );
  }
  export default Body2;
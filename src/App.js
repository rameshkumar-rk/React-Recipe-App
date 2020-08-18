import React,{useState,useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';


const App=()=>
{
  

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

 
  
  useEffect(()=>
  {
    getRecipe();
  },[query]);

  const getRecipe= async ()=>{
      const response=await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=xxxxxxxxx&app_key=xxxxxxxxxxxxxxxxxxxxxxxxxx`
        );
      const data= await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  }

  const updateSearch=e=>
  {
    setSearch(e.target.value);
  }

  const getSearch=e=>
  {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form  onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Search</button>

      </form>
      <div className="recipes">
      {recipes.map(recip=>(
        <Recipe 
        key={recip.recipe.label}
        title={recip.recipe.label} 
        calories={recip.recipe.calories} 
        image={recip.recipe.image}
        ing={recip.recipe.ingredients}
        />

      ))}
      </div>
    </div>
  );
}

export default App;

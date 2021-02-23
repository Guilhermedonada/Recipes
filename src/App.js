import React,{useEffect, useState} from 'react'
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = 'id'
  const APP_KEY = 'key'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  //faz o request ao iniciar pagina
  useEffect(() => {
    getRecipes()
  }, [query]) //vai fazer novo request apenas quando a variavel query mudar (quando clicar no botao)

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json() //formata em json a resposta
    setRecipes(data.hits)
  } 

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('') //deixa o input vazio depois do buscar
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
         <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
        {/* precisa de uma key no recipe (nao dar erro e tornar cada recipe unico) */}
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
        ))} 
      </div>
    </div>
  )
}
export default App;

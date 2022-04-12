import React, { useEffect, useState } from 'react';
import Manga from '../Manga/Manga';

const explore_manga = 'https://api.jikan.moe/v3/top/manga/1';
const search_manga = 'https://api.jikan.moe/v3/search/manga?page=1&q=';

function App() {
  const [ mangas, setMangas ] = useState([]);
  const [ term,setTerm ] = useState('');

  useEffect(() => {
    fetch(explore_manga)
    .then( response => response.json())
    .then( jsonResponse => {
      console.log(jsonResponse);
      setMangas(jsonResponse.top);
    })
  },[]);


  function handleOnSubmit(e) {
    e.preventDefault();

    fetch(`${search_manga}${term}`)
    .then( response => response.json())
    .then( jsonResponse => {
      console.log(jsonResponse);
      setMangas(jsonResponse.results);
    })
  }

  function handleOnChange(e) {
    setTerm(e.target.value);
  };  


  return (
    <>
    <div className='header'>
      <h1>MangaIn4</h1>
      <form onSubmit={handleOnSubmit}>
        <input className='search' 
                type='search'
                placeholder='Search.....'
                value={term}
                onChange={handleOnChange}/>
      </form>
    </div><div className='manga-container'>
        {mangas.length > 0 && mangas.map(manga => <Manga key={manga.mal_id} {...manga} />)}
      </div>
    </>
  );
}

export default App;

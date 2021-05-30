import React, { useCallback, useState} from 'react';
import Movie from './Movie';
import Button from './Button';
import "./Search.css";
import {naverMoviesApi} from '../api';
import { MdAdd } from 'react-icons/md';

const Search = () => {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("영화 검색");
  const [isVisibleButtons, setVisibleButtons] = useState(false);
  const [isVisibleMovie, setVisibleMovie] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const getSearchMovie = async () => {
    try {
      if (value === "") {
        setMovies([])
        setLoading(false)
      } else {
        setLoading(true)

        const res = await naverMoviesApi.search(value);

        const response = await naverMoviesApi.search(value);
        setMovies(res.data.items)
        setLoading(false)
        setVisibleButtons(true)
        //alert("(Loading 메시지 확인중...)");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e ) => {
    e.preventDefault();

    getSearchMovie();
  };

  return (<section className="container">
    {
      isLoading
        ? (<div className="loader">
          <span className="loader__text">({name}) Loading... {value}</span>
        </div>)
        : (<form onSubmit={handleSubmit}>
          <div className="line">
            <div className="input_div">
              <h1 className="ss">영화 검색 서비스</h1>
              <div className="is">
                <input className="input_search" type="text" value={value} onChange={handleChange} placeholder="영화 이름을 입력하세요."/>
                <button type="submit">
                  <MdAdd />
                </button>
              </div>
            </div>

            <div className="List">
            {isVisibleButtons ? <Button setVisibleMovie={setVisibleMovie} setSelectedNumber={setSelectedNumber}/> : ''}
            {isVisibleMovie ? 
                <Movie key={movies[selectedNumber-1].link} 
                id={movies[selectedNumber-1].link} 
                year={movies[selectedNumber-1].pubDate} 
                title={movies[selectedNumber-1].title} 
                poster={movies[selectedNumber-1].image} 
                rating={movies[selectedNumber-1].userRating} 
                director={movies[selectedNumber-1].director} 
                actor={movies[selectedNumber-1].actor} 
                />
              
              : ''}
            </div>
          </div>
        </form>)
    }
  </section>);
  
}

export default Search;

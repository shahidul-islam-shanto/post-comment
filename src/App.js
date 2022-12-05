

import React, { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import DetailsPost from './components/DetailsPost/DetailsPost';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Post from './components/Post/Post';



function App() {
 
  return (
    <div>
     
      <Header ></Header>
 
        <BrowserRouter>
          <Routes>
            <Route exact path='/'element={<Post ></Post>}/>
            <Route path='/post' element={<Post></Post>}/>
            <Route path='/details/:detailId' element={<DetailsPost></DetailsPost>}/>
            <Route path='*'element={<NotFound></NotFound>}/>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

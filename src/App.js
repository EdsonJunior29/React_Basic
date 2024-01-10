import { useState } from 'react';
import './App.css';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  
  const [modalIsVisible , setModalIsVisible] = useState(false);

  function hideModalHandler(){
    setModalIsVisible(false);
  }

  function showModelHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModelHandler}/>
      <main>        
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
   
  );
}

export default App;

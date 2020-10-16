import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header';
import QuestionForm from './component/Form';
function App() {
  return (
    <div className="App">
      <Header/>
      <QuestionForm/>
    </div>
  );
}

export default App;

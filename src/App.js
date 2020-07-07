import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'


import './App.css';

const HomePage = ()=>(
    <div>
        <Link to='/topics'>Topics</Link>
        <h1>HOME PAGE</h1>
    </div>
)
const TopicList = ()=>(
    <div>
        <h1>TOPIC LIST PAGE</h1>
    </div>
)
const TopicDetail = ()=>(
    <div>
        <h1>TOPIC DETAIL PAGE</h1>
    </div>
)

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/topics' component={TopicList}/>
            <Route exact path='/topics/:topicId' component={TopicDetail}/>
        </Switch>
    </div>
  );
}

export default App;

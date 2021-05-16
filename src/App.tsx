import React from 'react';
import logo from './logo.svg';
import TeslaLogo from './assets/images/brand.png'
import './App.css';
import AllItemCard from './components/widgets/AllItemsCard/AllItemsCard';
import { Acceleration, AllItemsCardModel, AllItemsCardProps } from './components/widgets/AllItemsCard/AllItemsCardModel'
import RoundButton from './components/widgets/RoundButton/RoundButton';
import { RoundButtonModel } from './components/widgets/RoundButton/RoundButtonModel';
import { RoundButtonTwoValuesModel } from './components/widgets/RoundButtonTwoValues/RoundButtonTwoValuesModel';
import RoundButtonTwoValues from './components/widgets/RoundButtonTwoValues/RoundButtonTwoValues';
import { ThreeRowDataModel } from './components/widgets/ThreeRowData/ThreeRowDataModel';
import ThreeRowData from './components/widgets/ThreeRowData/ThreeRowData';
import Logo from './components/widgets/Logo/Logo';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/landingPages/HomePage/HomePage';
import AllCarsPage from './components/landingPages/AllCarsPage/AllCarsPage';
import CarDetailsPage from './components/landingPages/CarDetailsPage/CarDetailsPage';
import OrderConfigPage from './components/landingPages/OrderConfigPage/OrderConfigPage';


const acc: Acceleration = {
  speed: '10',
  time: 20
}

const cardVal: AllItemsCardModel = {
  displayName: 'ModelS',
  model: 'modelS',
  range: 10,
  topSpeed: 20,
  peakPower: 10,
  img: '',
  acceleration: acc
}

// const buttonVal: RoundButtonModel = {
//   text: 'ALL CARS',
//   backgroundColor: '#464646',
//   textColor: '#FFF',
//   border: '0'
// }

// const twoValButton: RoundButtonTwoValuesModel = {
//   value1: 'Long Range',
//   value2: '$79,900',
//   borderColor: '#787878',
//   borderColorSelected: '#097BE4',
//   selected: true
// }

const threeRowDataModel: ThreeRowDataModel = {
  accelerationTime: '1.98 sec',
  estimatedRange: '520 mi',
  topSpeed: '200 mph'
}




function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/models/all' component={AllCarsPage} />
          <Route exact path='/models/:modelId' component={CarDetailsPage} />
          <Route exact path='/models/:modelId/order' component={OrderConfigPage} />
          {/*  <Route exact path='/orderComplete/:modelId/:variant/:paint/:wheel/:autopilot' component={OrderConfirm} /> */}
        </Switch>

      </div>
      {/* <article className="tweet">
        <img
          className="avatar"
          src="http://www.gravatar.com/avatar"
          alt="name"
        />
        <div className="content">
          <div className="author-meta">
            <span className="handle">@handle</span>
            <span className="name">Name</span>
            <span className="time">3hrs ago</span>
          </div>

          <p>Some insightful message</p>

          <ul className="actions">
            <li><button>Reply</button></li>
            <li><button>Retweet</button></li>
            <li><button>Like</button></li>
            <li><button>...</button></li>
          </ul>
        </div>
      </article>

      <AllItemCard allItemsCardModel={cardVal}></AllItemCard>
      {/* <RoundButton roundButtonModel={buttonVal}></RoundButton> */}
      {/* <RoundButtonTwoValues roundButtonTwoValuesModel={twoValButton}></RoundButtonTwoValues>
      <ThreeRowData threeRowDataModel={threeRowDataModel}></ThreeRowData>
      */ }
    </BrowserRouter>

  );
}

export default App;

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
import OrderComplete from './components/landingPages/OrderCompletePage/OrderComplete';

function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/models/all' component={AllCarsPage} />
          <Route exact path='/models/:modelId' component={CarDetailsPage} />
          <Route exact path='/models/:modelId/order' component={OrderConfigPage} />
          <Route exact path='/orderComplete' component={OrderComplete} />
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;

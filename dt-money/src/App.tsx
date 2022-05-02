import {GlobalStyle} from '../src/styles/global'

import { Dashboard } from './components/Dashboard/dashboard';
import { Header } from './components/Header/header';

export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />

      <GlobalStyle />
    </>
  );
}

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../Auth/AuthPage';
import NewOrderPage from '../NewOrder/NewOrderPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/Nav/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
          <NewOrderPage />
    </main>
  );
}
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UseFormHandling from './components/UseForm';
import Layout from './components/Layout';
import ToDoList from './components/ToDoList';
import Users from './components/Users';
import MainCounter from './components/MainCounterCmp';
import { ThemeProvider } from './components/ThemeContext';


function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/counter" element={<MainCounter />} />
                        <Route path="/useForm" element={<UseFormHandling />} />
                        <Route path='/users' element={<Users />} />
                        <Route path="/todolist" element={<ToDoList />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

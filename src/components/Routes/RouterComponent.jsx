import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import React from "react";
import AddUserComponent from '../MaterialComponent/AddUserComponent';
const AppRouter = () => {
    return (
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center">Primeira Aplicacao</h1>
                    <Routes>
                        <Route path="/add" element={<AddUserComponent />}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter
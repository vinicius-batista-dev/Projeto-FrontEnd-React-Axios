import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import React from "react";
import AddUserComponent from '../MaterialComponent/AddUserComponent';
import AddUserMaterialComponent from '../MaterialComponent/AddUserMaterialComponent';
import AddExercicio01 from '../MaterialComponent/AddExercicio01';
import AddExercicio02 from '../MaterialComponent/AddExercicio02';
import ListUserComponent from '../MaterialComponent/ListUserComponent'

const AppRouter = () => {
    return (
        <div>
            <Router>
                <div className="col-md-6">
                    <Routes>
                        <Route path="/ListUserComponent" element={<ListUserComponent />}></Route>
                        <Route path="/addUserComponent" element={<AddUserComponent />}></Route>
                        <Route path="/addUserMaterialComponent" element={<AddUserMaterialComponent /> } ></Route>
                        <Route path="/exercicio01" element={<AddExercicio01 /> } ></Route>
                        <Route path="/exercicio02" element={<AddExercicio02/> } ></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter
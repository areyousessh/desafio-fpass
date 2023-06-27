import {Routes, Route} from 'react-router-dom'
import React from 'react'
import { Home } from '../pages/Home'
import { Search } from '../pages/Search'

export function Router() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
        </Routes>
    )
}
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { InitialPage } from './Pages/InitialPage'
import { Page404 } from './Pages/Page404'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />} exact />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
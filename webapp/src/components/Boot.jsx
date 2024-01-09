import React from 'react';
import { JokeProviderWrapper } from "contexts/JokeContext";
import { ScoreProviderWrapper } from "contexts/ScoreContext";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

const Boot = () => (
    <BrowserRouter>
        <ScoreProviderWrapper>
            <JokeProviderWrapper>
                <App />
            </JokeProviderWrapper>
        </ScoreProviderWrapper>
    </BrowserRouter>
);

export default Boot;
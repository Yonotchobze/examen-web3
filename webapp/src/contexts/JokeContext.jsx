import { createContext, useContext, useEffect, useState } from "react"
import { getAllJokes } from "services/jokeApi";
import { ScoreContext } from "./ScoreContext";

const JokeContext = createContext(null);

const JokeProviderWrapper = (props) => {
    const [jokes, setJokes] = useState([])
    const { scores } = useContext(ScoreContext)
    
    const fetchJokes = async () => {
        const fetchedJokes = await getAllJokes();
        fetchedJokes.forEach(joke => {
            joke.scores = scores.filter(s => s.joke === joke.id);
            joke.scoreCount = joke.scores.length;
            if (joke.scoreCount > 0) 
                joke.averageScore = Math.round(joke.scores.reduce((sum, score) => sum + score.score, 0) * 10 / joke.scoreCount) / 10;
            else 
                joke.averageScore = 0;
        });
        setJokes(fetchedJokes);
    }

    const getJokeWithScores = (id) => {
        return jokes.find(j => j.id === id);
    }
    
    useEffect(() => {
        if (scores)
            fetchJokes();
    }, [scores]);

    const exposedValue = {
        jokes,
        getJokeWithScores,
    }
    
    return <JokeContext.Provider value={exposedValue}>
        { props.children }
    </JokeContext.Provider>
}

export {
    JokeContext,
    JokeProviderWrapper
}
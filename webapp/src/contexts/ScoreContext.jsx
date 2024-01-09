import { useState, createContext, useEffect } from "react";
import { createOneScore, getAllScores } from "services/scoreApi";

const ScoreContext = createContext(null)

const ScoreProviderWrapper = (props) => {
    const [scores, setScores] = useState([])
    
    const fetchScores = async () => {
        const fetchedScores = await getAllScores();
        setScores(fetchedScores);
    }

    const addOneScore = async (score) => {
        await createOneScore(score);
        fetchScores();
    }
    
    useEffect(() => {
        fetchScores();
    }, []);

    const exposedValue = {
        scores,
        addOneScore
    }
    
    return <ScoreContext.Provider value={exposedValue}>
        { props.children }
    </ScoreContext.Provider>    
}
    
export {    
    ScoreContext,
    ScoreProviderWrapper,    
}    

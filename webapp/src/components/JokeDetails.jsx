import { JokeContext } from "contexts/JokeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DetailElement from "./DetailElement";
import { List } from "antd";
import ScoreForm from "./ScoreForm";

const JokeDetails = () => {
    const { id } = useParams();
    const { getJokeWithScores } = useContext(JokeContext);

    const joke = getJokeWithScores(id);

    return (
        <>
            <DetailElement text={"Question"} element={joke.question} />
            <DetailElement text={"Answer"} element={joke.answer} />
            <DetailElement text={"Category"} element={joke.category} />
            <DetailElement text={"Average Score"} element={joke.averageScore} />
            <h2>Scores :</h2>
            <List
                bordered
                dataSource={joke.scores.sort((a, b) => a.score !== b.score ? b.score - a.score : a.date.localeCompare(b.date))}
                renderItem={score =>
                    <List.Item>
                        <DetailElement text={"Username"} element={score.username} />
                        <DetailElement text={"Date"} element={score.date} />
                        <DetailElement text={"Rating"} element={score.score} />
                    </List.Item>
                }
            />
            <ScoreForm jokeID={joke.id} />
        </>
    )
}

export default JokeDetails;
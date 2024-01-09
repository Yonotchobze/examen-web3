import { List } from 'antd';
import { JokeContext } from 'contexts/JokeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const JokesList = () => {
    const { jokes } = useContext(JokeContext);

    return (
        <List
            bordered
            dataSource={jokes}
            renderItem={joke => 
                <List.Item>
                    <Link to={`/jokes/${joke.id}`}>
                        {joke.question} {joke.answer}
                    </Link>
                </List.Item>
            }
        />
    )
}

export default JokesList;
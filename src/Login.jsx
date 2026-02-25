import './App.css';
import data from './response.json';

function Login() {
    const weather = () => {
        const items = [];

        for (let key in data) {
            items.push(
                <h2 key={key}>
                    {data[key].city} : {data[key].temperature}
                </h2>
            );
        }
        return items;
    };

    return (
        <>
            <h1>Please select the weather status</h1>
             {weather()};
        </>
    );
}

export default Login;
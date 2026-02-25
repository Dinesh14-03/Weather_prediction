import './App.css';
import data from './response.json';

function Login() {

    const login = () => {
        const items = [];

        for (let key in data) {
            items.push(
                <h2 key={key}>
                    {key} : {data[key]}
                </h2>
            );
        }

        return items;
    };

    return (
        <>
            <h1>Please select the weather status</h1>

            <button
                style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => alert('Scroll down to see data')}
            >
                Click here
            </button>

            {login()}
        </>
    );
}

export default Login;
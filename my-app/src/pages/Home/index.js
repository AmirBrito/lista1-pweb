import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Home(){
    return (
        <div className="page-home">
            <h1> Home </h1>
            <ul className="question-list">
                <li>
                    <Link to="q01">
                        Q01
                    </Link>
                </li>
                <li>
                    <Link to="q02">
                        Q02
                    </Link>
                </li>
                <li>
                    <Link to="q03">
                        Q03
                    </Link>
                </li>
                <li>
                    <Link to="q04">
                        Q04
                    </Link>
                </li>
                <li>
                    <Link to="q05">
                        Q05
                    </Link>
                </li>
                <li>
                    <Link to="q06">
                        Q06
                    </Link>
                </li>
                <li>
                    <Link to="q07">
                        Q07
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
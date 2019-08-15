import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";

function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 text-center">
                        <h2>Romance</h2>
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                            width="100%"
                            height="383px"
                        />
                        <Link to="/movies/romance">
                            <p>See Movies</p>
                        </Link>
                    </div>
                    <div className="col-md-3 text-center">
                        <h2>Action</h2>
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                            width="100%"
                            height="383px"
                        />
                        <Link to="/movies/action">
                            <p>See Movies</p>
                        </Link>
                    </div>
                    <div className="col-md-3 text-center">
                        <h2>Fiction</h2>
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
                            width="100%"
                            height="383px"
                        />
                        <Link to="/movies/fiction">
                            <p>See Movies</p>
                        </Link>
                    </div>
                    <div className="col-md-3 text-center">
                        <h2>Comedy</h2>
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
                            width="100%"
                            height="383px"
                        />
                        <Link to="/movies/comedy">
                            <p>See Movies</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

import React from 'react';

function ArticleContent() {
    return (
        <div className="ArticleContent">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-action list-group-item-primary text-center">
                            Top News Today
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Newcastle 0 - 1 Arsenal
                            <span className="badge badge-primary badge-pill">#1</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Newcastle 0 - 1 Arsenal
                            <span className="badge badge-primary badge-pill">#2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Newcastle 0 - 1 Arsenal
                            <span className="badge badge-primary badge-pill">#3</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Newcastle 0 - 1 Arsenal
                            <span className="badge badge-primary badge-pill">#4</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Newcastle 0 - 1 Arsenal
                            <span className="badge badge-primary badge-pill">#5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Newcastle 0 - 1 Arsenal
                            <span className="badge badge-primary badge-pill">#6</span>
                        </li>
                    </ul>
                </div>
                <div className="col-md-7">
                    <div className="card">
                        <img
                            src="https://bobcat.grahamdigital.com/7a743e189b3ca2c3549bbf46aa761986f861674e/fit-630x353-000.jpg"
                            className="card-img-top"
                            alt="breaking news"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan
                            </h5>
                            <p className="card-text">
                                Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Baca selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleContent;

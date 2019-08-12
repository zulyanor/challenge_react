import React from 'react';
import fotoCeweDua from '../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

function HomeContent() {
    return (
        <div className="HomeContent">
            <div className="container main-body">
                <div className="row">
                    <div className="col-md-5 text-right">
                        <div className="main-body-photo">
                            <img src={fotoCeweDua} height="355px" width="355px" id="cewe-foto" />
                        </div>
                    </div>
                    <div className="col-md-7 main-body-text">
                        <div className="main-body-text-1">Hi, my name is</div>
                        <div className="main-body-text-2">Anne Sullivan</div>
                        <div className="main-body-text-3">I build things for the web</div>
                        <div className="get-in-touch">
                            <button type="button" className="btn btn-get-in-touch">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;

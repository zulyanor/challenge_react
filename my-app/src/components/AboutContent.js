import React from 'react';
import fotoCewe from '../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import fotoDot from '../assets/img/img-dot@2x.png';

function AboutContent() {
    return (
        <div className="AboutContent">
            <div className="container-fluid about-me">
                <div className="row">
                    <div className="about-me-text">ABOUT ME.</div>
                </div>
            </div>
            <div className="container main-content">
                <div className="row">
                    <div className="col-md-7">
                        <div className="main-content-paragraph">
                            <p>
                                Hello! I'm Anna Sullivan, a full-stack engineer based in Malang, IDN who enjoys building
                                things that live on the internet. I develop exceptional websites and web apps that
                                provide intuitive, pixel perfect user interfaces with efficient and modern backends.
                            </p>
                            <p>
                                Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra
                                where I work on a wide variety of interesting and meaningful projects on a daily basis.
                            </p>
                            <p>Here's few technologies I've been working with recently:</p>
                        </div>
                        <div className="main-content-table">
                            <table className="table-hp" width="453px" height="116px">
                                <tr>
                                    <td>HTML & CSS</td>
                                    <td>Serverless</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>Programming</td>
                                    <td>Restful API</td>
                                    <td>Test-Driven Dev</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Javascript</td>
                                    <td>Software Testing</td>
                                </tr>
                                <tr>
                                    <td>Git & GitHub</td>
                                    <td>Single Page App</td>
                                    <td>UX/UI Designer</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="main-content-images">
                            <img src={fotoCewe} width="249px" height="249px" className="main-content-image-person" />
                            <img src={fotoDot} width="90px" height="76px" className="main-content-image-dot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;

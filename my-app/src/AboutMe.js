import React from 'react';
import logoAlta from './assets/img/logo-ALTA@2x.png';
import fotoCewe from './assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import fotoDot from './assets/img/img-dot@2x.png';
import logoAltaDua from './assets/img/logo-ALTA-v2@2x.png';
import fotoFB from './assets/img/ic_fb@2x.png';
import fotoTwitter from './assets/img/ic-twitter@2x.png';
import fotoInsta from './assets/img/ic-instagram@2x.png';
import fotoLinked from './assets/img/ic-linkedin@2x.png';
import './assets/css/challenge1.css';

function AboutMe() {
    return (
        <div className="AboutMe">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="header-logo-alterra">
                                <img src={logoAlta} height="67px" width="134px" />
                            </div>
                        </div>
                        <div className="col-md-7 header-menu-right">
                            <ul className="topMenu">
                                <li id="home">HOME</li>
                                <li id="about">ABOUT</li>
                                <li>EXPERIENCE</li>
                                <li id="contact">CONTACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
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
                                Hello! I'm Anna Sullivan, a full-stack engineer based in Malang, IDN
                                who enjoys building things that live on the internet. I develop
                                exceptional websites and web apps that provide intuitive, pixel
                                perfect user interfaces with efficient and modern backends.
                            </p>
                            <p>
                                Shortly after graduating from Alterra Academy, I joined the
                                engineering team at Alterra where I work on a wide variety of
                                interesting and meaningful projects on a daily basis.
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
                            <img
                                src={fotoCewe}
                                width="249px"
                                height="249px"
                                className="main-content-image-person"
                            />
                            <img
                                src={fotoDot}
                                width="90px"
                                height="76px"
                                className="main-content-image-dot"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="footer-logo-alterra">
                                <img src={logoAltaDua} width="110px" height="57px" />
                            </div>
                        </div>
                        <div class="col-md-3 social">
                            <div class="social-content">
                                <h5>Social Media</h5>
                                <ul class="social-media">
                                    <li>
                                        <img src={fotoFB} width="20px" height="20px" />
                                    </li>
                                    <li>
                                        <img src={fotoTwitter} width="20px" height="20px" />
                                    </li>
                                    <li>
                                        <img src={fotoInsta} width="20px" height="20px" />
                                    </li>
                                    <li>
                                        <img src={fotoLinked} width="20px" height="20px" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="copyright">
                                <h5>Copyright &copy; Alterra</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AboutMe;

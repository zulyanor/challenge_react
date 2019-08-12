import React from 'react';
import logoAltaDua from '../assets/img/logo-ALTA-v2@2x.png';
import fotoFB from '../assets/img/ic_fb@2x.png';
import fotoTwitter from '../assets/img/ic-twitter@2x.png';
import fotoInsta from '../assets/img/ic-instagram@2x.png';
import fotoLinked from '../assets/img/ic-linkedin@2x.png';

function Footer() {
    return (
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
    );
}

export default Footer;

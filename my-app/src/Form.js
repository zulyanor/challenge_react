import React from 'react';
import logoAltaDua from './assets/img/logo-ALTA-v2@2x.png';
import './assets/css/challenge1.css';

function Form() {
    return (
        <div className="Form">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-5 col-12 d-flex align-items-center gambar-panjang">
                        <div class="alterra">
                            <img src={logoAltaDua} width="247.99px" height="127.38" />
                        </div>
                        <div class="box-fit" />
                    </div>
                    <div class="col-md-7 ">
                        <div class="form-isi">
                            <h3>Contact Us</h3>
                            <form>
                                <div class="form-group">
                                    <label for="FormControl">
                                        Full Name<span>*</span>
                                    </label>
                                    <input
                                        type="fullname"
                                        class="form-control2"
                                        id="FormControl"
                                        placeholder="   Your Full Name..."
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="FormControl">
                                        Email Address<span>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control2"
                                        id="FormControl"
                                        placeholder="   example@domain.com"
                                        required
                                    />
                                </div>
                                <div class="form-group numberphone">
                                    <label for="FormControl">
                                        Phone Number<span>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control2 number-phone"
                                        id="FormControl"
                                        placeholder="   08543890****"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="FormControl">Nationality</label>
                                    <select
                                        class="form-control2 minimal"
                                        id="FormControl2"
                                        placeholder="Selected..."
                                        required
                                    >
                                        <option>Selected...</option>
                                        <option>Indonesian</option>
                                        <option>Malaysian</option>
                                        <option>Singaporean</option>
                                        <option>Australian</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="form-control">Message</label>
                                    <br />
                                    <textarea
                                        class="form-controlarea"
                                        id="exampleFormControlTextarea1"
                                        rows="10"
                                    />
                                </div>
                                <br />
                                <div class="button-submit">
                                    <button
                                        type="button"
                                        onclick="window.location.href= 'index.html'"
                                        class="btn btn-submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;

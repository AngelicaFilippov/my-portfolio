import React from "react";
import './Impressum.scss';


function Impressum() {
    return (
        <div className="impressum">
            <div className="impwrapper">
                <h2>Impressum</h2>
                <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
                <p>Angelica Filippov<br />
                Georges-Andre-Kohn-Str. 17<br />
                22457 Hamburg</p>
                <br/>
                <h3>Kontakt</h3>
                <p>Telefon: 01798041954<br />
                E-Mail: info@angelica-filippov.de</p>

                <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
            </div>
        </div>
    );
}

export default Impressum;
import React from "react";
import { Link } from "react-router-dom";
import "./error.css"
function Error404() {
    return (
        <div>
            <div class="error-container" style={ {background: "#f5f5f5 url(../img/bg.png) left top repeat"}}>
                <div class="error-code">404</div>
                <div class="error-text">Page non trouvée</div>
                <div class="error-subtext">Malheureusement, nous rencontrons des difficultés pour charger la page que vous recherchez. Veuillez patienter un instant et réessayer ou utiliser l'action ci-dessous.</div>
                <div className="errposit">
                    <div class="error-actions">
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn btn-info btn-block btn-lg">
                                    <Link to="/"> Retour au tableau de bord </Link></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error404;

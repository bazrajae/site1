import React from "react";
import Menu from "../../Menu";

import cont from "../../images/cont.jpg";

const Contact = () => {
  return (
    <div>
      <Menu />
      <h1>À QUELQUES PAS DE LA GRAND PLACE </h1>
      <p>C’est à travers notre convivialité, notre savoir-faire traditionnel 
        et l'utilisation de produits frais que nous vous faisons découvrir
         notre spécialité : les pâtes fraîches aux œufs.
          Toute la famille vous accueille dans un cadre moderne et chaleureux
           pour vous faire profiter de la culture et de cuisine italienne.</p><br></br>

<p>Pour toute demande de réservation, nous vous conseillons de nous contacter
 au minimum 2 à 3 jours à l’avance.</p><br></br>
      <section class="services-sections">
        <div class="containersc">

     <div class="c1"><img src={cont} width="80%" height="auto" alt="rajae" /></div>

      <div class="b2">
      <span class="R">Formulaire</span>
      <div class="r3">DE CONTACT</div>
      
       <h1>Adresse: 16 rue de la montagne à 1000 Bruxelles</h1>
          <h1>Téléphone: +32 (0)2 511 21 55.</h1>
          <h1>Email: info@pastadivina.be</h1>
          <h1>site web: https://www.pastadivina.be</h1><br></br>
          <p>VOUS POURREZ ACCÉDER AU RESTAURANT VIA LA RUE DE LA MONTAGNE.<br></br><br></br>
Pasta Divina se trouve à 150 m de la Grand-Place de Bruxelles et à proximité de la Gare Centrale et de l’arrêt Arenberg (bus 29, 66, 71 et 86).</p>
      </div>
     
      </div>
    
      </section>
    </div>
    
  );
};

export default Contact;

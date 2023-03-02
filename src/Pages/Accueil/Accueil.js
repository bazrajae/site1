import React from "react";
import Menu from "../../Menu";
import acc1 from "../../images/acc1.jpg";

const Accueil = () => {
  return (
    <div>
      <Menu />
     
      <section class="services-sections">
        <div class="containers">

     <div class="b1"><img src={acc1} width="50%" height="auto" alt="rajae" /></div>

      <div class="b2">
      <span class="R">piatto</span>
      <div class="r3">DÉCOUVREZ LA SAVEUR DES PÂTES FRAÎCHES ISSUES DE NOTRE SAVOIR-FAIRE
      TRADITIONNEL</div>
       <p>Antipasto, primo et/ou dolce : notre carte s'appuie sur les
      incontournables de la gastronomie italienne. Savourez nos pâtes fraîches &
      al dente cuisinées dans le respect de la tradition du pays natal de notre
      chef. Importés directement d'Italie, nos assortiments de fromage et de
      charcuterie sont sélectionnés pour vous offrir un voyage culinaire sans
      frontière. Composez vous-même votre assiette en choisissant vos pâtes et
      votre sauce ou laissez-vous transporter par l'une des spécialités de notre
      chef.</p>
      </div>
      </div>
      </section>
    </div>
    
  );
};

export default Accueil;

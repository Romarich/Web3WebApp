import React from 'react'

import Quote from '../Quote/Quote'
import Title from '../Title/Title'
import Footer from '../Footer/Footer'

import './DashboardPage.css'

//Juste chercher comment faire pour reprendre la date du navigateur
function DashboardPage() {
  var date = new Date();
  var heure = date.getHours();
  var minute = date.getMinutes();
  var seconde = date.getSeconds();
  var str = heure + ":" + minute + ":" + seconde;
  return (
    <div>
    <Title>Citations</Title>
    <Quote message="Never trust a computer you can't throw out a window." author="Steve Wozniak"></Quote>
    <Quote message="C'est dans les moments les plus sombres qu'on voit le mieux les étoiles" author="Charles A. Beard"></Quote>
    <Quote message="I've never met a strong person with an easy past" author="Atticus"></Quote>
    <Footer date= {str}></Footer>
    </div>
  )
}

export default DashboardPage;

import React from 'react'

import Quote from '../Quote/Quote'
import Title from '../Title/Title'
import Footer from '../Footer/Footer'

import './DashboardPage.css'

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
    <Footer date= {str}></Footer>
    </div>
  )
}

export default DashboardPage;

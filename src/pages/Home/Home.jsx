import React from 'react'
import Ariival from '../../components/Arrival/Ariival';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Nav bar/Navbar';
import Services from '../../components/Services/Services';
import Slideshow from '../../components/slideShow/Slideshow';
import Topbar from '../../components/Top-bar/Topbar';
import Weaklydeal from '../../components/Weakly Deal/Weaklydeal';
export default function Home() {
  return (
    <div>
    <Topbar/>
  <Navbar/>
  <Slideshow/>
  <Category/>
  <Ariival/>
  <Weaklydeal/>
  <Services/>
  <Footer/>
    </div>
  )
}

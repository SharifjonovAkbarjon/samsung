import React from 'react'
import Header from '../Header/Header'
import "../Scss/Main.scss"
import Category from '../Categoriya/Category'
import rasm from '../img/1.jpg'
import rasm3 from '../img/4.jpg'
import rasm2 from '../img/3.jpg'


export const links = [
  "Galaxy Z Flip6", " Galaxy Z Fold6", "Galaxy Watch Ultra", "Galaxy Buds3 Pro",
  " Galaxy Experience"]

export const tv = [
  "Samsung Neo QLED 8k", " TV + Soundbar bundles", " Q990D"]

export const home = [
  "Bespoke Appliances", " Bespoke Refrigerators", "Bespoke Laundry"]



const Main = () => {

  return (
    <>
        <Header/>
        <Category bg={"#rgb(244, 244, 244)"} text={"Mobile & Computing"} matn={links} name={"Galaxy Z Flips 6"} title={"Get up $650 instant trade-in credit and double the storage on us with select colors"}  img={rasm}/>
        <Category  bg={"#pink"} text={"TV & Audio"} matn={tv} name={"Discover new depths of detail"} title={"Buy an 85 Class Samsung Neo QLED QN800D and take in hyper-realistic picture with Neo Quantum HDR 8K"}  img={rasm2}/>
        <Category  bg={"#pink"} text={"Home Appliances"} matn={home} name={"Fresh deals on Bespoke fridges"} title={"Get up to $1.300 off select Bespoke Refrigerators and a second set of panels on us."}  img={rasm3}/>
    </>
  )
}


export default Main
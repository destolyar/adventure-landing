import React from "react";
import '../styles/components/underfooter.scss'

export const UnderFooter: React.FunctionComponent = () => {
 return(
   <section className="underfooter">
     <div className="underfooter__underline"></div>
     <div className="underfooter__text">© 2022. Developed by Vladislav Metik</div>
   </section>
 )
}

import React from 'react';
import BusRatesTable from './BusRatesTable';


const Packages = () => {
  return (
   <div>


     <section className="page-header">
            <div
                className="page-header__bg"
                style={{
                    backgroundImage: "url(/images/backgrounds/page-header-bg.jpg)"
                }}
            ></div>
            <div className="container">
                <div className="page-header__inner">
                    <h3>Packages</h3>
                </div>
            </div>
        </section>


     







       


    {/* <CabRatesTable/> */}
<BusRatesTable/>

<div className="rules-guidelines container">
 
<div className="rules-section">
  <h4 className="rules-title">Rules & Guidelines</h4>


<ul className="rules-list">
  <li>
    <span className="dot">✔</span>
    Driver allowance will be charged extra.
  </li>

  <li>
    <span className="dot">✔</span>
    Cab running limit is 300 km per day.
  </li>

  <li>
    <span className="dot">✔</span>
    Service time is from <b>6:00 AM to 10:00 PM</b>.
    Extra charges apply after 10:00 PM.
    Night charges apply from 12:00 AM to 6:00 AM.
  </li>

  <li>
    <span className="dot">✔</span>
    Time and distance are calculated on an office-to-office basis.
  </li>

  <li>
    <span className="dot">✔</span>
    Toll tax, parking charges, interstate taxes, and applicable taxes will be charged as actuals.
  </li>

  <li>
    <span className="dot">✔</span>
    Extra kilometre and extra hour charges will apply as per usage.
  </li>

  <li>
    <span className="dot">✔</span>
    Fuel price changes may affect the final rental rates.
  </li>
</ul>

</div>

</div>

   </div>
  );
};

export default Packages;

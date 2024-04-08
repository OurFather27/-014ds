import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import "./give.css"
import Helmet from 'react-helmet';
import Spiner from "../../components/Spiner/Spiner"
import {useEffect, useState} from "react"


function Give () {
  // Loading use state
    const [showspin, setShowSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 800)
  }, [])
  // end Loading use state

  return (
   <>
   <Topbar/>
    {/* Loading....*/}{showspin ? <Spiner/>:
   <div>
{/*<Helmet bodyAttributes={{style: "background-image : url('./6.jpeg')"}}/>*/}
<div className="container-Give">
<h1 className="">Give</h1>
</div>
<div className="Give_contenair">
<div className="Give_contenair_2">

<h2> Ways To Give</h2>
<h3>1,Online</h3>
<p>
1, Through your bank
<li> This is the preferred means of giving online. Using your bank’s bill pay system. 
Set up the church as a payee and the bank sends a “payment”.</li>

2,Through the giving app
<li> Simple and secure. Give a single gift, or schedule recurring giving using your checking account, 
debit, or credit card.</li>
<li> You have the option to pay the processing fee’s on your donation</li>
</p>
<h3>2. Text Message</h3>
<p>You can now use your debit/credit card or ACH from your bank to give through Give.Church. 
Click GIVE above to get started or text GIVE to 508.544.0709.</p>
<h3>3. Mail</h3>
<p>If you would like to give by mail, please make checks payable to <span>Faith Community Church.</span> Checks may be mailed to: </p>


<h3>4. Give Assets</h3>
<p>Please email <span>charla@faithma.org</span> to discuss donating assets to Faith Community Church.</p>
}
</div>
</div>
</div>
}
      <div className="footer_height">
       </div>
     <Footer/>
   </>

  );
}

export default Give

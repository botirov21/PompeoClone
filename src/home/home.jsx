import React from "react";
import { BackImage, HomeDiv, HomeLeftDiv, HomeRighttDiv,  CategoriesDiv, CategoriesPhoto, ThreeCategories, CategoriesText, CategoriesText2, CollectionDiv, ShoppingBackground, EmailDiv } from "./homeStyle";
import Logo from "../assets/image.png";
import Logo2 from "../assets/vases.png";
import Logo3 from "../assets/mugs.png";
import Logo4 from "../assets/plates.png";
import Logo5 from "../assets/image2.png";
import Logo6 from "../assets/image3.png";
import Logo7 from "../assets/decorplate.png";
import Logo8 from "../assets/minipottery.png";
import Logo9 from "../assets/setofpotterys.png";
import Logo10 from "../assets/orangeCeramic.png";
import Logo11 from "../assets/darkBowl.png";
import Logo12 from "../assets/squarePottery.png";
import Logo13 from "../assets/emailImage.png";



const Home = () => {
  return (
    <div>
      <BackImage>
        <HomeDiv>
          <HomeLeftDiv>
            <p>Pompeo Pottery</p>
            <div style={{ display: 'flex' }}>
              <h1>Unique Porcelain Stone Collection</h1> <h2>&</h2>
            </div>
            <h5>
              Unique & modern pottery made by our master in porcelain & stones
            </h5>
            <button>Shop Collection</button>
          </HomeLeftDiv>
          <HomeRighttDiv>
            <img src={Logo} alt="img" />
          </HomeRighttDiv>
        </HomeDiv>
      </BackImage>
      <CategoriesDiv>
        <div >
           <p>Product Categories</p>
           <div className="TitleName" style={{ display: 'flex'  }}>
              <h1>Porcelain</h1><h2>&</h2> <h1>Pottery</h1>
           </div>
        </div>
      </CategoriesDiv> 
      <CategoriesPhoto>
        <ThreeCategories>
           <div> <img src={Logo2} alt="img" /> </div>
           <div> <img src={Logo3} alt="img" /> </div>
           <div> <img src={Logo4} alt="img" /></div>
        </ThreeCategories>
         <CategoriesText>
           <div className="cdiv1" ><h1>Hand Grafted  Pottery since 1990</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
           </div>
           <div  className="cdiv2"><h1>We Provide Premium Pottery Produts</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
           </div>
         </CategoriesText>
         <CategoriesText>
           <div>
             <div className="gapDiv2" >  <img src={Logo5} alt="img" />  </div>
           </div>
           <div className="gapDiv" > <h1>Gold & Black Pottery</h1>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute. </p>
           <h5>View Details</h5>
           </div>
         </CategoriesText>
         <CategoriesText2>
           <div className="gapDiv" > <h1>Orange Ceramic</h1>  <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt. </p>
             <h5>View Details</h5>
           </div>
           <div  className="gapDiv1">
             <img src={Logo6} alt="img" /> 
           </div>
         </CategoriesText2>
      </CategoriesPhoto>
      <CollectionDiv>
         <div>
           <p className="titlep">Our online store</p>
           <h1>Pottery Collection</h1>
         </div>
         <div className="collectionDiv">
            <div>
             <img src={Logo7} alt="img" /> 
             <p className="cname">Decor Plate</p>
             <h6>$ 65.00 USD</h6>
            </div>
            <div>
             <img src={Logo8} alt="img" /> 
             <p className="cname">Mint Pottery</p>
             <h6>$ 75.00 USD</h6>
            </div>
            <div>
             <img src={Logo9} alt="img" />
             <p className="cname">Set Of Potterys</p>
             <h6>$ 125.00 USD</h6>
            </div>
            <div>
             <img src={Logo10} alt="img" /> 
             <p className="cname">Orange Ceramic</p>
             <h6>$ 55.00 USD</h6>
            </div>
            <div>
             <img src={Logo11} alt="img" /> 
             <p className="cname">Dark Bowl</p>
             <h6>$ 115.00 USD</h6>
            </div>
            <div>
             <img src={Logo12} alt="img" />
             <p className="cname">Square Pottery</p>
             <h6>$ 75.00 USD</h6>
            </div>
         </div>
         <button>View All Products</button>
      </CollectionDiv>
      <ShoppingBackground>
        <div className="shoppingInfo" > 
           <p>Pompeo Pottery</p>
           <h1>Ready to start shopping?</h1>
           <h5 className="shoppingText">Lorem ipsum dolor sit amet, <span class="highlighted-word">consectetur adipiscing elit</span>  . Suspendisse varius enim in eros elementum.</h5>
           <button className="shoppingbutton">New Collection</button>
        </div>
      </ShoppingBackground>
      <EmailDiv>
        <div className="EmailPhotoDiv">
        <img className="EmailPhoto" src={Logo13} alt="img" />
          <p className="NewsP">Latest news</p>
        </div>
      <div >
           <div className="emailTitle" style={{ display: 'flex'  }}>
              <h1>Latest news</h1><h2>&</h2> <h1>New updates</h1>
           </div>
      </div>
      <div className="EmailInput">
         <input type="text" name="" id="" placeholder="Enter your email" />
         <button>SUBSCRIBE  </button>
      </div>
      <div className="SignUpDiv">
        <input className="Checkbox" type="checkbox" />
        <p className="SignUpP">Sign up for our newsletter</p>
      </div>
      </EmailDiv>
    </div>
  );
};



export default Home;

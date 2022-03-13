import React, { useState } from "react";
import SubPageTitle from "./common/SubPageTitle";
import { FaRegTimesCircle, FaRegCreditCard } from "react-icons/fa";

const PurchaseBtn = ({ link }) => {
  return (
    <a
      href={link}
      className="icon-pay"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaRegCreditCard />
    </a>
  );
};

const Merch = () => {
  const merch = [
    {
      title: "Men's T-Shirt",
      description:
        "This is our best seller for a reason. Relaxed, tailored and ultra-comfortable, you'll love the way you look in this durable, reliable classic.",
      specific: [
        "Brand: Fruit of the Loom | Product ID: 3930",
        "100% pre-shrunk cotton (heather gray color is 90% cotton/10% polyester, light heather gray is 98% cotton/2% polyester, heather black and safety yellow are 50% cotton/50% polyester) | Fabric Weight: 5.0 oz (mid-weight)",
        "Double-stitched seams at shoulder, sleeve, collar and waist",
        "Tear-away label for added comfort",
        "Imported; processed and printed in the U.S.A.",
        "Size 3XL available for colors: white, black, navy, royal, bright green, red, light heather gray, forest green, orange, burgundy, purple, heather gray, charcoal, heather black, turquoise, denim, yellow, aquatic blue",
        "Size 4XL available for colors: white, black, navy, royal, red, light heather gray, forest green, orange, heather gray, charcoal, heather black, denim, yellow, aquatic blue",
        "Size 5XL and 6XL available for colors: white, black, navy, royal, red, light heather gray, forest green, heather gray, charcoal, heather black",
      ],
      img: "codesydney-mens-t-shirt.jpg",
      link:
        "https://www.spreadshirt.com.au/shop/design/codesydney+mens+t-shirt-D5efdbfcc2051764d0ed6ec13?sellable=jwon4NnxjgunyLrAE24r-210-7",
    },
    {
      title: "Men's Premium Hoodie",
      description:
        "If you're looking for a top-quality, instant-favorite sweatshirt, you've come to the right place! Our Premium Hoodie is everything you could ask for: it's warm and cozy, heavyweight and roomy, and built to last.",
      specific: [
        "80% cotton / 20% polyester (heather gray is 85% cotton / 15% rayon, heather denim and charcoal gray are 60% cotton, 40% polyester)| Fabric weight: 8.3 oz (midweight)",
        "Contrasting, complementary-colored drawstring and inner necktape",
        "Stitched slit inside kangaroo-style pocket and a small loop inside the hood for headphone usage",
        "Reinforced cuffs and waist",
        "Combed-cotton exterior, fuzzy fleece interior",
        "Imported garment, processed and printed in the U.S.A.",
        "Sizes 3XL, 4XL & 5XL added for colors: white, navy, black & heather grey",
      ],
      img: "codesydney-mens-premium-hoodie.jpg",
      link:
        "https://www.spreadshirt.com.au/shop/design/codesydney+mens+premium+hoodie-D5efdbfcc2051764d0ed6ec13?sellable=jwon4NnxjgunyLrAE24r-20-22",
    },
    {
      title: "Women's T-Shirt",
      description:
        "This classic tee offers plenty of room and is ideal for most body types. Contoured and side seamed for a feminine fit ITEM RUNS SMALL.",
      specific: [
        "Brand: Fruit of the Loom | Product ID: L3930R",
        "100% preshrunk cotton (heather gray is 90% cotton/10% polyester. Heather Pink, Purple, Coral & Black are 50% cotton/50% polyester) | Fabric Weight: 5.0 oz (mid-weight)",
        "Product runs small, check size chart",
        "Double-stitched seams at shoulder, sleeve, collar and waist",
        "Durable and reliable",
        "Tear-away label for added comfort",
        "Available in a wide variety of colors",
        "Imported; processed and printed in the U.S.A.",
        "Size 3XL available for colors: white, black, navy, charcoal, purple, heather gray, red, purple heather & heather black",
      ],
      img: "codesydney-womens-t-shirt.jpg",
      link:
        "https://www.spreadshirt.com.au/shop/design/codesydney+womens+t-shirt-D5efdbfcc2051764d0ed6ec13?sellable=jwon4NnxjgunyLrAE24r-347-8",
    },
    {
      title: "Women's Premium Hoodie",
      description:
        "If you're looking for a top-quality, instant-favorite sweatshirt, you've come to the right place! Our Premium Hoodie from our t Collection is everything you could ask for: it's warm and cozy with a tailored and feminine fit, and it's built to last. This item runs small.",
      specific: [
        "Brand: Spreadshirt",
        "80% cotton / 20% polyester (heather gray is 85% cotton / 15% rayon, heather denim and charcoal gray are 60% cotton, 40% polyester)| Fabric weight: 8.3 oz (midweight)",
        "Contrasting, complementary-colored drawstring and inner necktape",
        "Stitched slit inside kangaroo-style pocket and a small loop inside the hood for headphone usage",
        "Reinforced cuffs and waist",
        "Combed-cotton exterior, fuzzy fleece interior",
        "Imported garment, processed and printed in the U.S.A.",
        "Size: 3XL added for colors: white, navy, black & heather grey",
      ],
      img: "codesydney-womens-premium-hoodie.jpg",
      link:
        "https://www.spreadshirt.com.au/shop/design/codesydney+womens+premium+hoodie-D5efdbfcc2051764d0ed6ec13?sellable=jwon4NnxjgunyLrAE24r-444-23",
    },
    {
      title: "Code.Sydney Bag",
      description:
        "Perfect for students, businessmen on the go or your favorite local hipster who needs to carry his laptop with him on his vintage bike, this computer backpack has all the bells and whistles. Dedicated padded laptop storage, a guaranteed-to-keep-your-stuff-organized interior, headphone port… what more could you need?",
      specific: [
        "600 denier polyester canvas",
        "Dedicated padded exterior padded laptop compartment with side-entry",
        "Fits most 17” laptop computers. Depth is approx 7”",
        "Front-zippered pocket with organizer panel and headphone port",
        "Imported garment; processed and printed in the U.S.A.",
        "Not intended for use by children 12 and under",
      ],
      img: "codesydney-bag.jpg",
      link:
        "https://www.spreadshirt.com.au/shop/design/codesydney+computer+backpack-D5efdbfcc2051764d0ed6ec13?sellable=jwon4NnxjgunyLrAE24r-1157-33",
    },
    {
      title: "Code.Sydney Cap",
      description:
        "This 5-panel, flexfit, low-profile baseball cap is a great wear. It's perfect for teams or individuals, for the field or the street. The addition of spandex to the material makes for a form-fit, and the extras like a sewn-in sweatband and embroidered ventilation holes make this piece a smart buy.",
      specific: [
        "Brand: Flexfit | Product ID: 5001",
        "97% Cotton/3% Spandex",
        "Structured, firm front panel with low, flexible fit",
        "5-panel cap with reinforced pro-stitching throughout",
        "embroidered eyelets for ventilation",
        "Matching color undervisor",
        "Imported; processed and printed in the USA"
      ],
      img: "codesydney-cap.jpg",
      link:
        "https://www.spreadshirt.com.au/shop/design/codesydney+baseball+cap-D5efdbfcc2051764d0ed6ec13?sellable=jwon4NnxjgunyLrAE24r-129-34",
    },
  ];

  const [modalInfo, setModalInfo] = useState({});

  const showModal = (e, value) => {
    if (!e.target.classList.contains("icon-pay")) {
      document
        .getElementById("merch-modal")
        .classList.replace("merch-modal-hide", "merch-modal-show");
      setModalInfo(value);
      console.log("get modal info");
    }
  };

  const hideModal = (e) => {
    if (e.target.classList.contains("hide-modal")) {
      document
        .getElementById("merch-modal")
        .classList.replace("merch-modal-show", "merch-modal-hide");
      setModalInfo({});
      console.log("hide modal");
    }
  };

  return (
    <div className="merch-page">
      <SubPageTitle title="Merch" />
      <div>
        <div className="merch-distribution">
          <h4>All proceeds will go to the following:</h4>
          <ul>
            <li>92.5% Community Fund</li>
            <li>5% Local Charity Fund</li>
            <li>2.5% Operating Expenses</li>
          </ul>
        </div>
        <div className="merch-section">
          {merch.map((item, i) => {
            return (
              <div
                key={i}
                className="merch-card"
                onClick={(e) => showModal(e, item)}
              >
                <img
                  src={`/assets/images/merch/${item.img}`}
                  alt={item.title}
                />
                <div className="container merch-card-right">
                  <div className="merch-card-title">
                    <h5>{item.title}</h5>
                    <PurchaseBtn link={item.link} />
                  </div>
                  <p className="merch-card-description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="merch-modal"
        className="merch-modal-hide hide-modal"
        onClick={hideModal}
      >
        <div className="merch-modal-card">
          <div className="merch-modal-card-left">
            <img
              src={`/assets/images/merch/${modalInfo.img}`}
              alt={modalInfo.title}
            />
            <a href={modalInfo.link} target="_blank" rel="noopener noreferrer">
              <div>Shop with:</div>
              <img
                src={`/assets/images/merch/sprd-logo_horizontal.svg`}
                alt={modalInfo.title}
              />
            </a>
          </div>
          <div className="merch-modal-card-right">
            <h5>{modalInfo.title}</h5>
            <span>{modalInfo.description}</span>
            {modalInfo.specific && (
              <ul>
                {modalInfo.specific.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            )}
          </div>
          <FaRegTimesCircle
            className="icon-close hide-modal"
            onClick={hideModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Merch;

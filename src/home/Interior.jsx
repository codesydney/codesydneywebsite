import React, { Component , Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterTwo";
import Testimonial from "../elements/Testimonial";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import TeamOne from "../blocks/team/TeamOne";
import Slider from "react-slick";
import { slickDot , portfolioSlick2 } from "../page-demo/script";


const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'INTERIOR HOUSE',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const PortfolioList2 = [
    {
        image: 'image-1',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    }
]


const ServiceListOne = [
    {
        icon: "icon-01.png",
        title: 'Interior Design',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: "icon-02.png",
        title: 'Landcape Design',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: "icon-03.png",
        title: 'Home Interior',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    
]

class InteriorLanding extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        return(
            <Fragment>
                <Helmet pageTitle="Interior Design" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/logo.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home','service','getstart','about','team','testimonial','portfolio']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#getstart">Get Start</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                    <span>buy now</span>
                                </a>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-activation slider-creative-agency" id="home">
                    <div className="bg_image bg_image--29" data-black-overlay="4">
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="feature-area">
                                    <span>FUTURE HOUSE</span>
                                    <h3 className="title mt--20 fontWeight500 lineheight--1-8">What you look your hopefull house we can be made it for yours. We can be design yours house so dont woory you can hire us. Beautiful and hand made design we can be create.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper mt--30">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src={`/assets/images/icons/${val.icon}`} alt="Service Icon"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">{val.title}</h4>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start Call To Action Area  */}
                <div className="call-to-action-wrapper call-to-action bg_image bg_image--30 text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80" id="getstart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="inner text-left">
                                    <span>READY TO DO THIS</span>
                                    <h2>Let's get to work</h2>
                                    <a className="rn-button-style--2 mt--70 mt_sm--30 mt_md--30" href="/contact"><span>Contact Us</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Call To Action Area  */}

                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Content Box  */}
                <div className="rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1" id="about">
                    <div className="row row--0 align-items-center">
                        <div className="col-lg-12 col-xl-6">
                            <div className="thumbnail">
                                <img src="/assets/images/featured/featured-01.jpg" alt="Featured Images"/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30">
                            <div className="content">
                                <p className="subtitle"><span>Modern</span> Design For Interior</p>
                                <h2 className="fontWeight500">Provide a Modern Design For Your Home and Office</h2>
                                <p>Uniq interior design provide for your home. you can be create as you like. Our modern designer provide as you are like. A interior designer can build your design and fullfile your demand.Uniq interior design provide for your home. you can be create as you like. Our modern designer provide as you are like. A interior designer can build your design and fullfile your demand</p>
                                <ul className="list-style mt--30">
                                    <li>Yet this above sewed flirted opened ouch</li>
                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                    <li>Abominable this abidin far successfully then like piquan</li>
                                    <li>Risus commodo viverra</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* End Content Box  */}

                {/* Start Team Area  */}
                <div className="rn-team-wrapper pb--120 bg_color--1" id="team">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="section-title text-left mb--30">
                                        <h2>Meet Our Designer</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="4" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
                
                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title text-left service-style--3 mb--30">
                                    <h2 className="title">All Works</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper portfolio-sacousel-inner mb--55">
                        <div className="portfolio-slick-activation mt--30 mt_sm--30">
                            <Slider {...portfolioSlick2}>
                                {PortfolioList2.map((value , index) => (
                                    <div className="portfolio portfolio-interior-design" key={index}>
                                        <div className="thumbnail-inner">
                                            <div className={`thumbnail ${value.image}`}></div>
                                            <div className={`bg-blr-image ${value.image}`}></div>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                <div className="portfolio-button">
                                                    <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default InteriorLanding;
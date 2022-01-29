import React, {Component, Fragment} from "react";
import ScrollToTop from 'react-scroll-up';
import Particles from 'react-particles-js';
import {
    FaReact,
    FaSass
} from "react-icons/fa";
import {
    FiSmartphone,
    FiCode,
    FiDownload,
    FiCommand,
    FiHeadphones,
    FiBold,
    FiChevronUp
} from "react-icons/fi";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const featureList = [
    {
        icon: <FaReact/>,
        title: 'Latest React 16.8+',
        subtitle: 'We used latest react vertion ^16.8.6.Its a awesome design made by react.'
    },
    {
        icon: <FiSmartphone/>,
        title: 'Perfect Responsive',
        subtitle: 'Our Template is full Perfect for all device. You can visit our template all device easily.'
    },
    {
        icon: <FiCode/>,
        title: 'Well Documented Codes',
        subtitle: 'The Trydo code is awesome well documented code. And Its customization is very easily'
    },
    {
        icon: <FaSass/>,
        title: 'Sass Available',
        subtitle: 'The tamplate has Sass available for css. You can Change css by sass'
    },
    {
        icon: <FiDownload/>,
        title: 'Fast Loading Speed',
        subtitle: 'Trydo is faster loading speed.Trydo create your theme so much faster '
    },
    {
        icon: <FiCommand/>,
        title: 'Modern Design',
        subtitle: 'Trydo is a modern creatuve design for Creative Agency , Personal Portfolio etc....'
    },
    {
        icon: <FiHeadphones/>,
        title: '24 Support System',
        subtitle: 'We are provide 24 hours support for all clients.You can purchase without hesitation.'
    },
    {
        icon: <FiBold/>,
        title: 'Bootstrap Comfortable',
        subtitle: 'Bootstrap comfortable is available in trydo. So layout changes is so much easily'
    }
]

const singleDemo = [
    {
        url: 'main-demo',
        imageUrl: 'demo-home.png',
        title: 'Main Demo',
        description: 'Our Template is perfect for creative agency.All agencies use this template for all purpose.',
        label: ''
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        description: 'Our Template is perfect for creative agency.All agencies use this template for all purpose.',
        label: 'New'
    },
    {
        url: 'interactive-agency',
        imageUrl: 'interactive-agency.png',
        title: 'Interactive Agency',
        description: 'Its a modern design with all realted features for creative agencies company.',
        label: 'New'
    },
    {
        url: 'personal-portfolio',
        imageUrl: 'personal-portfolio.png',
        title: 'Personal Portfolio',
        description: 'Its a personal portfolio tamplate thats can be used your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: ''
    },
    {
        url: 'creative-agency',
        imageUrl: 'creative-agency.png',
        title: 'Creative Agency',
        description: 'Its a modern design with all realted features for creative agencies company.',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        description: 'Corporate Business is build for new or any startup business company. It has available all section for corporate business agency company and others business purpose.',
        label: 'Hot'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'A interior design comes for new interior agency company. Our can hire your clint by using this template. It has landing page feature available.',
        label: 'New'
    },
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'Hot'
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: ''
    },

    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Added creative agency landing page.When you need creative agency landing page you can be use it for your creative agency, Digital agency landing page page.',
        label: ''
    },

    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio is a awesome portfolio website demo. By using this you can be build a website for your portfolio',
        label: ''
    },

    {
        url: 'designer-portfolio',
        imageUrl: 'designer-portfolio.png',
        title: 'Designer Portfolio',
        description: 'Designer POrtfolio is a portfolio website demo for all personal portfolio website. A designer present their works by the designer portfolio home demo..',
        label: 'Hot'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle has most feature is particles animation.It can be used for your creative agency, Business agency, Digital agency and so on, And it has Landing page added.',
        label: ''
    },
   

    {
        url: 'portfolio-home',
        imageUrl: 'portfolio-home.png',
        title: 'Minimal Portfolio',
        description: 'Its a minimal portfolio template. You can be showing your portfolio perfectly by using this template.',
        label: ''
    },

    {
        url: 'digital-agency',
        imageUrl: 'digital-agency.png',
        title: 'Digital Agency',
        description: 'A Digital Agency template is a nice slider animation, faster loading and all features available for agencies.',
        label: ''
    },
    {
        url: 'business',
        imageUrl: 'business.png',
        title: 'Business',
        description: 'It has available all kinds of features for a Business corporate website.You can be use it for your Business website.',
        label: ''
    },
    {
        url: 'startup',
        imageUrl: 'startup.png',
        title: 'Startup',
        description: 'A modern and nice design template that can be all startup agencies for all kinds of startup purpose.',
        label: ''
    },
    {
        url: 'paralax',
        imageUrl: 'paralax.png',
        title: 'Paralax Home',
        description: 'Its a nice and awesome paralax background image design.You can be use it for Business, Corporate, Degital Agency and other so on.',
        label: ''
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        description: 'It has been used background video and vedio popup.You can use it for all kinds of agencies studio.',
        label: ''
    
    },
    {
        url: '#comingsoon',
        imageUrl: 'coming-soon.png',
        title: 'Coming Soon',
        description: 'More Feature are Coming Soon',
        label: ''
    },
    {
        url: '#comingsoon',
        imageUrl: 'coming-soon.png',
        title: 'Coming Soon',
        description: 'More Feature are Coming Soon',
        label: ''
    }
]

const agencyDemo = [
    {
        url: 'interactive-agency',
        imageUrl: 'interactive-agency.png',
        title: 'Interactive Agency',
        description: 'Its a modern design with all realted features for creative agencies company.',
        label: 'New'
    },
    {
        url: 'main-demo',
        imageUrl: 'demo-home.png',
        title: 'Main Demo',
        description: 'Our Template is perfect for creative agency.All agencies use this template for all purpose.',
        label: ''
    },
    {
        url: 'creative-agency',
        imageUrl: 'creative-agency.png',
        title: 'Creative Agency',
        description: 'Its a modern design with all realted features for creative agencies company.',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        description: 'Corporate Business is build for new or any startup business company. It has available all section for corporate business agency company and others business purpose.',
        label: 'Hot'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle has most feature is particles animation.It can be used for your creative agency, Business agency, Digital agency and so on, And it has Landing page added.',
        label: ''
    },
    {
        url: 'digital-agency',
        imageUrl: 'digital-agency.png',
        title: 'Digital Agency',
        description: 'A Digital Agency template is a nice slider animation, faster loading and all features available for agencies.',
        label: ''
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio is a awesome portfolio website demo. By using this you can be display your portfolio and your companies project',
        label: 'New'
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        description: 'It has been used background video and vedio popup.You can use it for all kinds of agencies studio.',
        label: ''
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        description: 'Our Template is perfect for creative agency.All agencies use this template for all purpose.',
        label: 'New'
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Added creative agency landing page.When you need creative agency landing page you can be use it for your creative agency, Digital agency landing page page.',
        label: ''
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'A interior design comes for new interior agency company. Our can hire your clint by using this template. It has landing page feature available.',
        label: 'New'
    },
    {
        url: 'paralax',
        imageUrl: 'paralax.png',
        title: 'Paralax Home',
        description: 'Its a nice and awesome paralax background image design.You can be use it for Business, Corporate, Degital Agency and other so on.',
        label: ''
    },
]

const busenessDemo = [
    {
        url: 'business',
        imageUrl: 'business.png',
        title: 'Business',
        description: 'It has available all kinds of features for a Business corporate website.You can be use it for your Business website.',
        label: ''
    },
    {
        url: 'startup',
        imageUrl: 'startup.png',
        title: 'Startup',
        description: 'A modern and nice design template that can be all startup agencies for all kinds of startup purpose.',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        description: 'Corporate Business is build for new or any startup business company. It has available all section for corporate business agency company and others business purpose.',
        label: 'Hot'
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio is a awesome portfolio website demo. By using this you can be display your portfolio and your companies project',
        label: 'New'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle has most feature is particles animation.It can be used for your creative agency, Business agency, Digital agency and so on, And it has Landing page added.',
        label: ''
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        description: 'It has been used background video and vedio popup.You can use it for all kinds of agencies studio.',
        label: ''
    },
    {
        url: 'paralax',
        imageUrl: 'paralax.png',
        title: 'Paralax Home',
        description: 'Its a nice and awesome paralax background image design.You can be use it for Business, Corporate, Degital Agency and other so on.',
        label: ''
    },
]

const portfolioList = [
    {
        url: 'personal-portfolio',
        imageUrl: 'personal-portfolio.png',
        title: 'Personal Portfolio',
        description: 'Its a personal portfolio tamplate thats can be used your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: ''
    },
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'Hot'
    },
    {
        url: 'designer-portfolio',
        imageUrl: 'designer-portfolio.png',
        title: 'Designer Portfolio',
        description: 'Designer Portfolio is a portfolio website demo for all personal portfolio website. A designer present their works by the designer portfolio home demo..',
        label: 'Hot'
    },

    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio is a awesome portfolio website demo. By using this you can be display your portfolio and your companies project',
        label: 'New'
    },
    {
        url: 'portfolio-home',
        imageUrl: 'portfolio-home.png',
        title: 'Minimal Portfolio',
        description: 'Its a minimal portfolio template. You can be showing your portfolio perfectly by using this template.',
        label: ''
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'New'
    },
    


]

const landingPage = [
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'Hot'
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'New'
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Added creative agency landing page.When you need creative agency landing page you can be use it for your creative agency, Digital agency landing page page.',
        label: 'New'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'A interior design comes for new interior agency company. Our can hire your clint by using this template. It has landing page feature available.',
        label: 'New'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle has most feature is particles animation.It can be used for your creative agency, Business agency, Digital agency and so on, And it has Landing page added.',
        label: ''
    },
]

const newDemoList = [
    {
        url: 'interactive-agency',
        imageUrl: 'interactive-agency.png',
        title: 'Interactive Agency',
        description: 'Its a modern design with all realted features for creative agencies company.',
        label: 'New'
    },
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'Hot'
    },
   
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        description: 'Corporate Business is build for new or any startup business company. It has available all section for corporate business agency company and others business purpose.',
        label: 'Hot'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'A interior design comes for new interior agency company. Our can hire your clint by using this template. It has landing page feature available.',
        label: 'New'
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Added creative agency landing page.When you need creative agency landing page you can be use it for your creative agency, Digital agency landing page page.',
        label: 'New'
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'New'
    },
  
]



const innerDemo = [
    {
        url: 'service',
        imageUrl: 'service.png',
        title: 'Service',
    },
    {
        url: 'service-details',
        imageUrl: 'service-details.png',
        title: 'Service Details',
    },
    {
        url: 'about',
        imageUrl: 'about.png',
        title: 'About',
    },
    {
        url: 'blog',
        imageUrl: 'blog-list.png',
        title: 'Blog List',
    },
    {
        url: 'blog-details',
        imageUrl: 'blog-details.png',
        title: 'Blog Details',
    },
    {
        url: 'portfolio',
        imageUrl: 'portfolio.png',
        title: 'Portfolio',
    },
    {
        url: 'portfolio-details',
        imageUrl: 'portfolio-details.png',
        title: 'Portfolio Details',
    },
    {
        url: 'contact',
        imageUrl: 'contact.png',
        title: 'Contact',
    },
    {
        url: '404',
        imageUrl: '404.png',
        title: '404 Page',
    },

]

class Demo extends Component {
    render() {
        return (
            <Fragment>
                {/* Start Banner Area  */}
                <div className="prv-banner-wrapper"
                     style={{backgroundImage: `url("assets/images/preview/preview-bg.jpg")`}}>
                    <div className="container-fluid">
                        <div className="plr--120">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5">
                                    <div className="inner">
                                        <div className="logo text-left">
                                            <a href="/">
                                                <img src="/assets/images/logo/logo.png" alt="Trydo Images"/>
                                            </a>
                                        </div>
                                        <p className="title">Welcome to TryDO React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!</p>
                                        <div className="purshase-btn">
                                            <a href="https://themeforest.net/checkout/from_item/25457315?license=regular" className="rn-button-style--2 btn-solid">BUY Now</a>
                                            <a href="#demo" className="rn-button-style--2 btn-border rn-btn-dark border-opacity-half">View Demos</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fullscreen empty-div gradient-overlay"></div>
                {/* End Banner Area  */}

                {/* Start Preview Main Wrapper */}
                <div className="main-wrapper" id="demo">

                    {/* Start Main Demo Area  */}
                    <div className="home-demo-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="theme-gradient">Home Demo</h2>
                                        <p>Choose one of styles or cutomize easily your site following your ideas. <br/> More
                                            demos are coming soon.</p>
                                    </div>
                                </div>
                            </div>
                            <Tabs>
                                <div className="row text-center">
                                    <div className="col-lg-12">
                                        <div className="tablist-inner">
                                            <TabList className="pv-tab-button text-center">
                                                <Tab><span>All Demo</span></Tab>
                                                <Tab><span>Agency</span></Tab>
                                                <Tab><span>Corporate</span></Tab>
                                                <Tab><span>Portfolio</span></Tab>
                                                <Tab><span>Landing</span></Tab>
                                                <Tab><span>New</span></Tab>
                                            </TabList>
                                        </div>
                                    </div>
                                </div>
                                
                                <TabPanel className="row">
                                    {singleDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {agencyDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {busenessDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {portfolioList.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {landingPage.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {newDemoList.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                            </Tabs>

                        </div>
                    </div>
                    {/* End Main Demo Area  */}

                    {/* Start Main Demo  */}
                    <div className="home-demo-area bg_color--3 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="theme-gradient">Inner Pages</h2>
                                        <p>Choose one of styles or cutomize easily your site following your ideas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {innerDemo.map((value , index) => (
                                    // Start Single Demo
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-demo">
                                            <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                <h3 className="title">{value.title}</h3>
                                            </a>
                                        </div>
                                    </div>
                                    // End Single Demo
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Main Demo  */}

                    {/* Start Feature Area  */}
                    <div className="prv-feature service-area bg_color--4 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="text-white">Awesome Feature</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Start Single Feature  */}
                                {featureList.map((value, i) => (
                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12" key={i}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {value.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{value.title}</h3>
                                                <p className="subtitle">{value.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* End Single Feature  */}
                            </div>
                        </div>
                    </div>
                    {/* End Feature Area  */}

                     {/* Start Faq Area */}
                    <div className="pv-feaq-area bg_color--3 ptb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="section-title text-left pb--30">
                                        <p>Check out our FAQ section to see if we can help.</p>
                                        <h2 className="theme-gradient">Do you have any Question</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="faq-area">
                                        <Accordion className="accodion-style--1" preExpanded={'0'}>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        What is tryDo ? How does it work?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>Welcome to TryDO React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!. It works too much faster loading speed and you can works too much comfortability.Trydo create your website so much faster, use to use and Well Documented Codes for your customization.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        How can I run trydo react template?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>You can run trydo easily.
                                                    First You'll need to have node and npm on your machine.
                                                    So Please open your command prompt then check your node -v and npm -v Version.
                                                    Goes To Your your command prompt: then
                                                    First: <strong>npm install</strong></p>
                                                    <p>At Last: <strong>npm run start</strong>. By the following way you can be run your project easily.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        How can I change my demo page instead of splash page?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div>
                                                        <p>
                                                            You can be presenting any home page instead of splash page. http://localhost:3000 you can showing any page as your you are like. First you have to go index.js page then:
                                                        </p>
                                                        <p>First Step (replace your choose demo page): Example: import Demo form './home/MainDemo' Instead of './home/PortfolioLanding'</p>
                                                        <p>Example: <a className="theme-gradient" href="https://www.dropbox.com/s/ysornwsweh836wi/change-home-page.png?dl=0">https://www.dropbox.com/s/ysornwsweh836wi/change-home-page.png?dl=0</a></p>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        How can I get the customer support?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        After purchasing the product  need you any support you can be share with us with sending mail to <a className="theme-gradient" href="mailto:rainbowit10@gmail.com">rainbowit10@gmail.com</a>.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I get update regularly and For how long do I get updates?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature.
                                                        You can be get update for unlimited times. Our dedicated team works for update.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I change any component as I like?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, You can change any component as you like. And By the way you can build your website which you are choose.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Can I build a complete project with this template?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, Why not. You can build a project and complete website as you are like. More component are available include in this templete. And you can be use it following documentation.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                          
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                     {/* Start Faq Area */}
                                    

                    {/* Start Footer Area  */}
                    <footer className="call-to-action-wrapper text-white-wrapper call-to-action ptb--120 with-particles">
                        <div className="frame-layout__particles">
                            <Particles
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 50
                                        },
                                        "size": {
                                            "value": 4
                                        }
                                    },
                                    "interactivity": {
                                        "events": {
                                            "onhover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <span>Purchase The TryDo and Make Your Site super faster and easy.</span>
                                        <h2>Let's go to Purchase</h2>
                                        <a className="rn-button-style--2" href="https://themeforest.net/checkout/from_item/25457315?license=regular"><span>Purchase Now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* End Footer Area  */}
                </div>
                {/* End Preview Main Wrapper */}
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
export default Demo;
import React, { Component } from "react";
import { FaTrophy, FaMedal } from "react-icons/fa";

const ServiceList = [
    {
        icon: <FaTrophy />,
        title: '1st Place Winner, Hack4FI (Financial Inclusion)',
        description: 'Bunji (which means mate as borrowed from Warlpiri dialect) is our app entry which provides seamless access to Indigenous experiences for both international and domestic tourists. It also aims to provide opportunities to Indigenous-owned businesses and employment opportunities for Indigenous youth.'
    },
    {
        icon: <FaMedal />,
        title: '3rd Place Winner, Hack4Homelessness',
        description: 'Vibewire\'s Hack4Homelessness was a 3-day hackathon to help solve the social, technical, cultural and behavioural challenges of homelessness. Our 5-person team from Code.Sydney pitched a solution called blend.co which can help struggling Australians have a fair go in getting into rental property tenancy.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Awards',
        description = '';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text"></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;

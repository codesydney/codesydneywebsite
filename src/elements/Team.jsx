import React, { Component } from "react";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";

let TeamContent = [
    {
        images: '01',
        title: 'Jone Due',
        designation: 'Sr. Web Developer',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: '#'
            },
            {
                icon: <FaLinkedinIn />,
                url: '#'
            },
            {
                icon: <FaTwitter />,
                url: '#'
            },
        ]
    },
    {
        images: '02',
        title: 'Fatima Asrafi',
        designation: 'Front-end Engineer',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: '#'
            },
            {
                icon: <FaLinkedinIn />,
                url: '#'
            },
        ]
    },
    {
        images: '03',
        title: 'Al-Amin Bali',
        designation: 'Sr. Graphic Designer',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: '#'
            },
            {
                icon: <FaLinkedinIn />,
                url: '#'
            },
            {
                icon: <FaTwitter />,
                url: '#'
            },
        ]
    },
    {
        images: '06',
        title: 'Jone Due',
        designation: 'Sr. Web Developer',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: '#'
            },
            {
                icon: <FaLinkedinIn />,
                url: '#'
            },
            {
                icon: <FaTwitter />,
                url: '#'
            },
        ]
    },
    {
        images: '05',
        title: 'Fatima Asrafi',
        designation: 'Front-end Engineer',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: '#'
            },
            {
                icon: <FaLinkedinIn />,
                url: '#'
            },
        ]
    },
    {
        images: '12',
        title: 'Al-Amin Bali',
        designation: 'Sr. Graphic Designer',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: '#'
            },
            {
                icon: <FaLinkedinIn />,
                url: '#'
            },
            {
                icon: <FaTwitter />,
                url: '#'
            },
        ]
    }
];


class Team extends Component{
    render(){
        const {column} = this.props;
        return(
            <React.Fragment>
                {TeamContent.map((value , i ) => (
                    <div className={`${column}`} key={i}>
                        <div className="team">
                            <div className="thumbnail">
                                <img src={`/assets/images/team/team-${value.images}.jpg`} alt="Blog Images"/>
                            </div>
                            <div className="content">
                                <h4 className="title">{value.title}</h4>
                                <p className="designation">{value.designation}</p>
                            </div>
                            <ul className="social-icon" >
                                {value.socialNetwork.map((social, index) =>
                                    <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}
export default Team;
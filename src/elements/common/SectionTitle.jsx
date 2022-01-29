import React, { Component , Fragment } from "react";

class SectionTitle extends Component {
    render() {
        const { title , textColor } = this.props
        return (
             <Fragment>
                 <div className="section-title-default">
                     <h2 className={`title ${textColor}`}>{title}</h2>
                 </div>
             </Fragment>
        )
    }
}
export default SectionTitle;




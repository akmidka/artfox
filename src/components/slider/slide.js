import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

class SLide extends React.Component{
    render(){
        return(
            <div className="slide_mk">
                <Img fluid={this.props.image}/>                    
            </div>
        )
    }
    
}

export default SLide
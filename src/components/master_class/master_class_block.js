import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

class MasterClassBlock extends React.Component{
    render(){
        return(
            <div className="master_class_block">
                    <Img fluid={this.props.image}/>
                    <div className="mcb_right">
                        <h1>
                            {this.props.title}
                        </h1>
                        <p>
                            {this.props.subtitle}
                        </p>
                        <p>
                            {this.props.date}
                        </p>
                        <Link to="/">
                            Связаться с нами
                        </Link>
                    </div>
                </div>
        )
    }
    
}

export default MasterClassBlock
import React from 'react'
import PropTypes from "prop-types";
const defaultStyle = {
    color:"#ffffff",
    backgroundColor:"#009688",
    /* -ve margin has been given to move this 
        header element near about main model component
    */
    marginLeft:"-10px",
    marginRight:"-10px",
    marginTop:"-10px",
    padding:"10px",
    borderTopLeftRadius:"10px",
    borderTopRightRadius:"10px",
    // same color as background colorr
    boxShadow:"0px 15px 10px -15px #009688"
}
function Header(props) {
    return (
        <div style={{...defaultStyle,...props.styles}} className={props.className} id={props.id}>
            {props.children}
        </div>
    )
}

Header.propTypes={
    /**
     * class name for header component.
     */
    className:PropTypes.string,

    /**
     * id of header component.
     */
    id:PropTypes.string,
    styles:PropTypes.object
}

Header.defaultProps={
    className:"rahul-react-model-header",
    id:"rahul-react-model-header",
    styles:{
    }
}
export default Header

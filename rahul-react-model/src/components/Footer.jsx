import React from 'react'
import PropTypes from 'prop-types'
const defaultStyle = {
    color:"black",
    backgroundColor:"rgb(239 239 239)",
    // -ve margin has been given to move this 
    // header element near about main model component
    marginLeft:"-10px",
    marginRight:"-10px",
    marginTop:"-10px",
    borderBottomLeftRadius:"10px",
    borderBottomRightRadius:"10px",
    // same color as background colorr
    boxShadow:"0px -15px 10px -15px rgb(239 239 239)",
    position:"absolute",
    bottom:0,
    padding:"10px",
    width:"100%",

    // to prevent overflow
    boxSizing:"border-box"
}
function Footer(props) {
    return (
        <div style={{...defaultStyle,...props.styles}} className={props.className} id={props.id}>
            {props.children}
        </div>
    )
}

Footer.propTypes = {
    height:PropTypes.string,
    width:PropTypes.string,
    backgoundColor:PropTypes.string,
    styles:PropTypes.object,
    className:PropTypes.string,
    id:PropTypes.string
}

Footer.defaultProps={
    className:"rahul-react-model-footer",
    id:"rahul-react-model-footer",
    styles:{
    }
}
export default Footer

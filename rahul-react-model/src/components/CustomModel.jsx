import React from 'react'
import PropTypes from "prop-types";
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
const defaultStyle = {
    backgroundColor:"#fefefe",
    boxShadow:"0px 0px 10px 0px lightgrey",
    borderRadius:"20px",
    padding:"10px",
    position:"fixed",
    width:"400px",
    height:"300px",
    right:0,
    left:0,
    zIndex:1000,
    marginRight:"auto",
    marginLeft:"auto",
    marginTop:"100px"
}
function CustomModel(props) {
    return (
        <div style={{...defaultStyle,...props.styles}} className={props.className} id={props.id}>
            {props.children}
        </div>
    )
}

CustomModel.propTypes = {
    /**
     * Height of the model
     */
    height:PropTypes.string,

    /**
     * Width of the model
     */
    width:PropTypes.string,

    /**
     * z-index of model
     */
    zIndex:PropTypes.number,
    
    /**
     * Class name for model div.
     */
    className:PropTypes.string,
    
    /**
     * Id name for model div.
     */
    id:PropTypes.string,

    /**
     * Style applied to the model container.
     */
    styles:PropTypes.object,

    /**
     * A boolean value which specifies, model is open or not.
     */
    open:PropTypes.bool
}



CustomModel.defaultProps = {
    className:"rahul-react-model",
    id:"rahul-react-model",
    open:false,
    styles:{
    }
}

CustomModel.Header = Header
CustomModel.Footer = Footer
CustomModel.Content = Content
export default CustomModel

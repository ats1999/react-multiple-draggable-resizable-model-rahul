import React from 'react'
import PropTypes from 'prop-types';
function Content(props) {
    return (
        <div className={props.className} id={props.id}>
            {props.children}
        </div>
    )
}

Content.propTypes={
    height:PropTypes.string,
    width:PropTypes.string,
    color:PropTypes.string,
    backgroundColor:PropTypes.string,
    fontSize:PropTypes.string,
    className:PropTypes.string,
    id:PropTypes.string,
    styles:PropTypes.object
}

Content.defaultProps = {
    height:"100px",
    width:"100%",
    color:"black",
    backgroundColor:"white",
    fontSize:"16px",
    className:"rahul-react-model-content",
    id:"rahul-react-model-content",
    styles:{}
}
export default Content

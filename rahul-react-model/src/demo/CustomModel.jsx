import React,{useState} from "react";
import CustomModel from "../components/CustomModel";

export default function CustomModelDemo(){
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        {isOpen?
        <CustomModel>
            <CustomModel.Header styles={{backgroundColor:"blue"}}>
                <h5 style={{margin:0,textAlign:"center",fontSize:"20px"}}>This is heading</h5>
                <button style={{
                    float:"right",
                    fontSize:"30px",
                    marginTop:"-30px",
                    color:"white",
                    background:"none",
                    border:"none",
                    boxShadow:"0px 0px 20px 0px lightgray"
                }}
                    onClick={()=>setIsOpen(!isOpen)}
                >X</button>
            </CustomModel.Header>

            <CustomModel.Content>
                This is some content.
            </CustomModel.Content>

            <CustomModel.Footer>
                Some footer
            </CustomModel.Footer>
        </CustomModel> : <button style={{
            fontSize:"30px",
            color:"green",
            background:"none",
            border:"none",
            position:"fixed",
            right:0,
            left:0,
            marginRight:"auto",
            marginLeft:"auto",
            marginTop:"100px"
        }}
            onClick={()=>setIsOpen(!isOpen)}
        >Open model</button>
    }
    </div>
}
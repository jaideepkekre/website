import React from "react";
import { Button} from 'antd';


const resumeurl = "https://drive.google.com/file/d/13cew_778EJ7J8v9mn47Vh1UtNL6SGNhC/view?usp=sharing"

function Resume() {
    return(
        <Button href={resumeurl} target="_blank"   type="dashed"  size="large" > View & Download Resume </Button>

    )
}



export default Resume;
import * as React from "react";
import { render } from "react-dom";
import { Box } from "@material-ui/core";

function Timer() {   
    const [counter, setCounter] = React.useState(20);
     React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
     }, [counter]);
    return (
    <div>
      <Box
      style={{
        color:"white", 
        border:"solid", 
        borderRadius:"60px", 
        width: "60px", 
        height:"60px",
        textAlign:"center",
        lineHeight:"60px",
        backgroundColor: "salmon"
        }}>{counter}</Box>
    </div>
  );
};
export default Timer;
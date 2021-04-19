import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          height: "150px",
          display: "inline",
          flexWrap: "wrap", 
        },

      },
      
}));

const Answers = () => {

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const classes = useStyles();

    return (
        <div className={classes.root}>
        
            <Button variant="contained" color="primary">
            Ajouter une réponse
                <div>
                <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    color="secondary"
                    name="checkedA"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /> 
                </div>   
            </Button>
            <Button variant="contained" color="primary">
            Ajouter une réponse
                <div>
                <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="secondary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />    
                </div>
            </Button>
            <Button variant="contained" color="primary">
            Ajouter une réponse
                <div>
                <Switch
                    checked={state.checkedC}
                    onChange={handleChange}
                    color="secondary"
                    name="checkedC"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    /> 
                </div>   
            </Button>
            <Button variant="contained" color="primary">
            Ajouter une réponse
                <div>
                <Switch
                    checked={state.checkedD}
                    onChange={handleChange}
                    color="secondary"
                    name="checkedD"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    /> 
                </div>   
            </Button>

            <div>
      
      
      
    </div>
        
        </div>
    );
}

export default Answers;
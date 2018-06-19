import React from 'react';
// material-ui components
import { withStyles } from "@material-ui/core";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const style = {
  textCenter: {
    textAlign: "center"
  }
};

const AddBlockForm = ({ classes, input, enterkey, onInputChange, onButtonSubmit }) => {
    return(
		<Card className={classes.textCenter} style={{width: "55rem"}} >
        <CardHeader color="primary" style={{fontSize: "1.25rem", fontWeight: "100"}}>LINK NEXT SEQUENCE</CardHeader>
        <CardBody>
           <GridItem xs={8} sm={8} md={12}>
              <CustomInput
                  labelText="Enter data to mine"
                  id="inputData"
                  inputProps={{
                    placeholder: "",
                    value: input,
                    onChange: onInputChange
                  }}
                  formControlProps={{ 
                    fullWidth: true, 
                    onKeyPress: enterkey
                  }}
              />
          </GridItem>
          <Button 
            type="submit"
            color="primary" 
            style={{fontSize: "1.25rem", fontWeight: "100"}} 
            onClick={ onButtonSubmit }>Add</Button>
        </CardBody>
      </Card>          
    );
};

export default withStyles(style)(AddBlockForm);


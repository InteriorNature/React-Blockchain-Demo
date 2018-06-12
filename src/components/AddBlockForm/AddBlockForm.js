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

class AddBlockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  onInputChange (event) {
    let { input } = this.state;
    console.log(event.target.value);
    this.setState({input: event.target.value});
    console.log(input);
  };

  onButtonSubmit (event) {
    event.preventDefault();
    if (this.props.onClick && typeof this.props.onClick === "function") {
      this.props.onClick(this.state.input);
    }
  }

   render() {
    const { classes } = this.props;
    return(
		<Card className={classes.textCenter} style={{width: "55rem"}} >
        <CardHeader color="primary" style={{fontSize: "1.25rem", fontWeight: "100"}}>LINK NEXT SEQUENCE</CardHeader>
        <CardBody>
           <GridItem xs={8} sm={8} md={12}>
              <CustomInput
                  labelText="Enter data to mine"
                  id="inputData"
                  inputProps={
                    {placeholder: "Enter data to mine"},
                    {value: this.state.input},
                    {onChange:  this.onInputChange}
                  }
                  formControlProps={{ fullWidth: true }}
              />
          </GridItem>
          <Button 
            color="primary" 
            style={{fontSize: "1.25rem", fontWeight: "100"}} 
            onClick={ this.onButtonSubmit }>Add</Button>
        </CardBody>
      </Card>          
    );
  }
};

export default withStyles(style)(AddBlockForm);


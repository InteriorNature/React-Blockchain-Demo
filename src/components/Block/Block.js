import React from 'react';

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
//import Fingerprint from "@material-ui/icons/Fingerprint"; <Fingerprint />
//    "material-ui": "^0.20.1",
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const Block = ({ cardColor, titleLabel, block }) => {
	return(
	  <Card style={{marginBottom: "50px", width: "55rem"}} >
        <CardHeader color={ cardColor } style={{fontSize: "1.5rem", fontWeight: "100"}}>{titleLabel}</CardHeader>
        <CardBody>
	        <GridItem xs={8} sm={8} md={12}>
	              <CustomInput
	                  labelText={block.data}
	                  id="regular"
	                  inputProps={{ placeholder: block.data}}
	                  formControlProps={{ fullWidth: true }}
	              />
	        </GridItem>
	    </CardBody>
        <CardBody>
        	<Badge color="success" width="160px">Previous Hash</Badge>{block.previousHash}
        </CardBody>
        <CardBody>
        	<Badge color="success" width="160px">Time</Badge>{block.timestamp}
        </CardBody>
        <CardBody>
        	<Badge color="success" width="160px">Nonce</Badge>{block.nonce}
        </CardBody>
        <CardBody>
        	<Badge color="success" width="160px">Hash</Badge>{block.hash}
        </CardBody>
      </Card>
	);
}

export default Block;
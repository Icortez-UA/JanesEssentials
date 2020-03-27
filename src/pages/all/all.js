import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function AllStrains(){

    return <div>
        <CssBaseline />
        <Container maxWidth="sm" component="main">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Janes Essentials
        </Typography>
        <Typography variant="subtitle2" align="center" color="textSecondary" component="p">
        This web application will allow users to search through cannabis strains and have quick access to key information to help them make an informed choice on what type of marijuana they would like to purchase beforehand.Users will be able to search through all of the 2000+ strains and decide which is best for their own needs. Our strain pages consist of a description of said strain, its positive and negative affects. Also, each specific page will contain an identity number and what each strain should be used for medically. Thanks for using Jane's Essentials!
        </Typography>
      </Container>
        <Container maxWidth="md" component="main">
            <Card>
            <CardHeader
                  title= "test"
                />
            </Card>
        </Container>
        </div>

}
export default AllStrains;
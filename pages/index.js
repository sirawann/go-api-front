import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function Home({ data }) {
  return (
      <div>
         <Container maxWidth="lg">
          <Grid container spacing={2}>
            {data.map(item => (
              <Grid item xs={12} md={4} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.coverimage}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.detail}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}  
          </Grid>
         </Container>
         
    </div>
  );
}




// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://127.0.0.1:8080/attractions`)
  const data = await res.json()
  console.log(data)

  // Pass data to the page via props
  return { props: { data } }
}







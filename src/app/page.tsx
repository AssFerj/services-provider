/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import "@flaticon/flaticon-uicons/css/all/all.css"
import defaultTheme from '@/config/themes/defultTheme'
import { ThemeProvider } from '@emotion/react'
import { Box, Button, Typography, Grid, Paper, ImageList, ImageListItem, FormControl, FormLabel, FormGroup, FormHelperText, TextField } from '@mui/material'
import encanador from '../../public/encanador-hero.png'
import Image from 'next/image'
import './global.css'
import { servicesCards } from '@/utils/servicesCards'
import cardBg from '../../public/card-bg.webp'
import img01 from '../../public/01.jpg'
import img02 from '../../public/02.jpg'
import img03 from '../../public/03.jpg'
import img04 from '../../public/04.jpg'
import icon01 from '../../public/icon01.png'
import icon02 from '../../public/icon02.png'
import icon03 from '../../public/icon03.png'
import icon04 from '../../public/icon04.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function Home() {
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          spacing={1}
          direction={{sm: 'column',md: 'column', xl: "row"}}
          justifyContent="center"
          alignItems="center"
          alignContent="stretch"
          wrap="wrap"
          bgcolor={defaultTheme.palette.primary.main}
          px={{sm: 3, md: 3, xl: 30}}
          pt={20}
        >
          <Grid item 
            flex={1} 
            display={'flex'}
            direction={'column'}
            justifyContent={{sm: 'center', md: 'center', xl: 'flex-end'}} 
            alignItems={{sm: 'center', md: 'center', xl: 'flex-end'}}
          >
            <Typography 
              variant="h3" 
              fontWeight={'bold'} 
              color={defaultTheme.palette.text.primary}
              textAlign={'end'}>
              Expert Plumbing
            </Typography>
            <Typography 
              variant="h3" 
              fontWeight={'bold'} 
              color={defaultTheme.palette.text.primary}
              textAlign={'end'}>
              <span style={{
                color: '#FEDA71'
              }}>Services</span> Provider
            </Typography>
            <Typography 
              variant="body2" 
              color={defaultTheme.palette.primary.contrastText} 
              mt={2} 
              textAlign={{sm: 'center', md: 'center', xl: 'end'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ut deleniti maxime, saepe aliquam tenetur magnam. Impedit ipsa minima expedita non. Quisquam quae quas tempora architecto soluta voluptatibus obcaecati nostrum!
            </Typography>
            <Button 
              variant='contained' 
              color='secondary' 
              sx={{
                borderRadius: 5,
                fontSize: 12,
                mt: 2
              }}>Learn More
            </Button>
            <Box 
              display={'flex'} 
              flexDirection={'row'}
              mt={20}
            >
              <Box sx={{
                mt: 5,
                p: 3,
                mb: -0,
                bgcolor: '#f5f5f5',
                borderRadius: '15px 15px 0 0',
                maxWidth: 350
              }}>
                <Typography variant="body1" fontWeight={'bold'} color={defaultTheme.palette.primary.main}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
              </Box>
              <Box sx={{
                p: 3,
                ml: -5,
                mb: -5,
                bgcolor: defaultTheme.palette.secondary.main,
                borderRadius: 5,
                maxWidth: 150
              }}>
                <Typography variant="body1" fontWeight={'bold'} color={defaultTheme.palette.primary.main}>Lorem ipsum dolor sit amet elit.</Typography>
                <Button variant='contained' color='primary' sx={{
                  borderRadius: 5,
                  fontSize: 12,
                  mt: 2
                }}>About Us</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item 
            flex={1} 
            mt={-50} 
            display={{xm: 'none', sm: 'none', md: 'none',xl: 'block'}}
          >
            <Image 
              className='hero-img'
              src={encanador} 
              alt="Encanador" 
              width={500} 
              height={600}
              style={{marginBottom: -342}} 
            />
          </Grid>
        </Grid>
        <Grid
          container
          width={'100%'}
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          p={15}
        >
          <Grid item
            display={'flex'}
            gap={2}
          >
            <Typography 
              variant="h5" 
              fontWeight={'bold'} 
              color={defaultTheme.palette.text.secondary}
              flex={1}
            >
              Explore Our Services & Solutions
            </Typography>
            <Typography 
              variant="body2" 
              color={defaultTheme.palette.text.secondary} 
              flex={1}
              // textAlign={{sm: 'center', md: 'center', xl: 'end'}}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ut deleniti maxime, saepe aliquam tenetur magnam!
            </Typography>
          </Grid>
          <Grid item
            display={'flex'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={3}
            mt={10}
            width={{
              sm: 500,
              md: 700,
              xl: 1000
            }}
          >
            {servicesCards.map(card => (
              <Paper key={card.id}
                elevation={5}
                sx={{
                  padding: 3,
                  width: 150,
                  height: 200,
                  borderRadius: 5,
                  backgroundImage: `url(${cardBg})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <Typography 
                  variant="h6" 
                  fontWeight={'bold'}
                  color={defaultTheme.palette.primary.main}
                >
                  {card.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color={defaultTheme.palette.primary.main}
                  mt={2}
                >
                  {card.description}
                </Typography>
              </Paper>
            ))}
            <Paper
                elevation={5}
                sx={{
                  padding: 3,
                  width: 150,
                  height: 250,
                  bgcolor: defaultTheme.palette.secondary.main,
                  borderRadius: 5
                }}
              >
                <Typography 
                  variant="h6" 
                  fontWeight={'bold'}
                  textAlign={'center'}
                  color={defaultTheme.palette.primary.main}
                >
                  Explore Our Services and Solutions, Trusted Plumbing Professionals
                </Typography>
                <Box
                  sx={{
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Button 
                    variant='contained' 
                    color='primary'
                    sx={{
                      borderRadius: 5
                    }}
                  >Lern More</Button>
                </Box>
              </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          bgcolor="#f7f7f7"
          py={10}
          width={"100%"}
        >
          <Grid item width={400}>
          <ImageList variant="masonry" cols={2} gap={8}>
              <ImageListItem>
                <Image
                  src={img01}
                  width={150}
                  height={100} 
                  alt={''}  
                  style={{
                    borderRadius: 20
                  }}              
                />
              </ImageListItem>
              <ImageListItem>
                <Image
                  src={img02}
                  width={150}
                  height={100} 
                  alt={''}      
                  style={{
                    borderRadius: 20
                  }}             
                />
              </ImageListItem>
              <ImageListItem>
                <Image
                  src={img03}
                  width={150}
                  height={100} 
                  alt={''}        
                  style={{
                    borderRadius: 20
                  }}           
                />
              </ImageListItem>
              <ImageListItem>
                <Image
                  src={img04}
                  width={150}
                  height={100}  
                  alt={''}    
                  style={{
                    borderRadius: 20
                  }}               
                />
              </ImageListItem>
          </ImageList>
          </Grid>
          <Grid item>
            <Typography 
              variant="h5" 
              color={defaultTheme.palette.primary.main} 
              textAlign={'start'}
              fontWeight={'bold'}
            >
                We Are Avilble 24/7
            </Typography>
            <Typography 
              variant="h5" 
              color={defaultTheme.palette.primary.main} 
              textAlign={'start'}
              fontWeight={'bold'}
            >
              Emergency Service
            </Typography>
            <Typography 
              variant="body2" 
              color={defaultTheme.palette.primary.main}
              width={400}
              mt={2}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia deserunt ipsam dolor nulla accusantium modi officia animi.
            </Typography>
            <Paper 
              elevation={3} 
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 5,
                bgcolor: defaultTheme.palette.primary.contrastText
                }}
              >
              <Typography 
                variant="body2" 
                color={defaultTheme.palette.primary.main}
                width={400}
                mt={2}
              >
                &#x2B9A; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography 
                variant="body2" 
                color={defaultTheme.palette.primary.main}
                width={400}
                mt={2}
              >
                &#x2B9A; Eveniet mollitia deserunt ipsam dolor nulla accusantium modi officia animi.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          py={20}
          px={{sm: 10, md: 20, xl: 60}}
          wrap="wrap"
          width={'100%'}
          bgcolor={defaultTheme.palette.primary.main}
          color={defaultTheme.palette.primary.contrastText}
        >
          <Grid item>
            <Typography 
              variant="h5"
              fontWeight={'bold'}
            >
              That's How We Work
            </Typography>
          </Grid>
          <Grid container 
            pt={6}
            spacing={8}
            display={'flex'}
            justifyContent={'center'}
          >
            <Grid item
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              xl={3}
              md={6}
            >
              <Image 
                src={icon01} 
                alt={''} 
                width={50} 
                style={{
                  borderRadius: 50,
                  borderColor: defaultTheme.palette.primary.main,
                  borderStyle: 'dashed',
                  borderWidth: 1                
                }}/>
                <Box 
                  sx={{
                    py: .5,
                    mt: -2,
                    ml: 5,
                    width: 23,
                    borderRadius: 50,
                    bgcolor: defaultTheme.palette.secondary.main
                  }}
                >
                  <Typography 
                    variant="body1" 
                    color="primary" 
                    textAlign={'center'}
                    fontSize={10}
                  >1</Typography>
                </Box>
                <Box
                  maxWidth={250}
                >
                  <Typography 
                    mt={2}
                    variant="body1" 
                    fontWeight={'bold'} 
                    textAlign={'center'}
                    color={defaultTheme.palette.primary.contrastText}
                  >
                    Book Online or With Phone
                  </Typography>
                  <Typography 
                    mt={2}
                    variant="body2" 
                    textAlign={'center'}
                    color={defaultTheme.palette.primary.contrastText}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Box>
             </Grid>
             
            <Grid item
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              xl={3}
              md={6}
            >
              <Image 
                src={icon02} 
                alt={''} 
                width={50} 
                style={{
                  borderRadius: 50,
                  borderColor: defaultTheme.palette.primary.main,
                }}/>
                <Box 
                  sx={{
                    py: .5,
                    mt: -2,
                    ml: 5,
                    width: 23,
                    borderRadius: 50,
                    bgcolor: defaultTheme.palette.secondary.main
                  }}
                >
                  <Typography 
                    variant="body1" 
                    color="primary" 
                    textAlign={'center'}
                    fontSize={10}
                  >2</Typography>
                </Box>
                <Box
                  maxWidth={250}
                >
                  <Typography 
                    mt={2}
                    variant="body1" 
                    fontWeight={'bold'} 
                    textAlign={'center'}
                    color={defaultTheme.palette.primary.contrastText}
                  >
                    We Identify That Problem
                  </Typography>
                  <Typography 
                    mt={2}
                    variant="body2" 
                    textAlign={'center'}
                    color={defaultTheme.palette.primary.contrastText}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Box>
            </Grid>
            <Grid item
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              xl={3}
              md={6}
            >
              <Image 
                src={icon03} 
                alt={''} 
                width={50} 
                style={{
                  borderRadius: 50,
                  borderColor: defaultTheme.palette.primary.main,
                  borderStyle: 'dashed',
                  borderWidth: 1
                }}/>
                <Box 
                  sx={{
                    py: .5,
                    mt: -2,
                    ml: 5,
                    width: 23,
                    borderRadius: 50,
                    bgcolor: defaultTheme.palette.secondary.main
                  }}
                >
                  <Typography 
                    variant="body1" 
                    color="primary" 
                    textAlign={'center'}
                    fontSize={10}
                  >3</Typography>
                </Box>
                <Box
                  maxWidth={250}
                >
                  <Typography 
                    mt={2}
                    variant="body1" 
                    fontWeight={'bold'} 
                    textAlign={'center'}
                    color={defaultTheme.palette.primary.contrastText}
                  >
                    Our Professional Arive
                  </Typography>
                  <Typography 
                    mt={2}
                    variant="body2" 
                    textAlign={'center'}
                    color={defaultTheme.palette.primary.contrastText}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Box>
            </Grid>
            <Grid item
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              xl={3}
              md={6}
            >
              <Image 
                src={icon04} 
                alt={''} 
                width={50} 
                style={{
                  borderRadius: 50,
                  borderColor: defaultTheme.palette.primary.main,
                  borderStyle: 'dashed',
                  borderWidth: 1
                }}/>
                <Box 
                  sx={{
                    py: .5,
                    mt: -2,
                    ml: 5,
                    width: 23,
                    borderRadius: 50,
                    bgcolor: defaultTheme.palette.secondary.main
                  }}
                >
                  <Typography 
                    variant="body1" 
                    color="primary" 
                    textAlign={'center'}
                    fontSize={10}
                  >4</Typography>
                </Box>
                <Box
                  maxWidth={250}
                >
                  <Typography 
                    mt={2}
                    variant="body1" 
                    fontWeight={'bold'} 
                    textAlign={'center'}
                    color={defaultTheme.palette.primary.contrastText}
                  >
                    We Solve Your Problem
                  </Typography>
                  <Typography 
                    mt={2}
                    variant="body2" 
                    textAlign={'center'}
                    color={defaultTheme.palette.primary.contrastText}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          px={20}
          mt={-10}
        >
          <Grid item
            flex={1}
            sx={{
              width: 300,
              height: 224,
              padding: 0,
              borderRadius: '5px 0 0 5px',
              bgcolor: defaultTheme.palette.primary.contrastText,
              backgroundImage: `url(${img01})`,
              backgroundSize: 'cover'
            }}
          >
            <PlayCircleIcon 
              sx={{
                // position: 'absolute',
                // top: '50%',
                // left: '50%',
                // color: defaultTheme.palette.primary.contrastText,
                fontSize: 100
              }}
            />
            {/* <Image 
              src={img01} 
              alt={''} 
              style={{
                width: '100%'
              }} /> */}
          </Grid>
          <Grid item
            flex={5}
            sx={{
              p: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0 5px 5px 0',
              bgcolor: defaultTheme.palette.secondary.main
            }}
          >
            <Typography 
              variant="h6" 
              fontWeight={'bold'} 
              color="initial"
            >
              Professional Plumbing Maintenance Will Save Time And Money
            </Typography>
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
              mt={2}
            >
              <Grid item md={6}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  type='text'
                  size='small'
                  value={''}
                  onChange={()=>{}}
                  sx={{
                    bgcolor: defaultTheme.palette.primary.contrastText,
                    borderRadius: 2
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  type='email'
                  size='small'
                  value={''}
                  onChange={()=>{}}
                  sx={{
                    bgcolor: defaultTheme.palette.primary.contrastText,
                    borderRadius: 2
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  id="message"
                  label="Message"
                  type='text'
                  size='small'
                  value={''}
                  onChange={()=>{}}
                  sx={{
                    bgcolor: defaultTheme.palette.primary.contrastText,
                    borderRadius: 2
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <Button variant="contained" color="primary" fullWidth>
                    Book a Service
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  )
}

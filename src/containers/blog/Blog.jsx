import React from 'react';
import Article from '../../new/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hero from "../../components/trendings/Corousel"

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> So Explore the trendings</h1>
    </div>
    <div className="gpt3__blog-container">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '20vh' }}
      >

        <Grid item xs={3}>
          <Hero/>
        </Grid>

      </Grid>
    </div>
  </div>
);

export default Blog;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/bookAction';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from '@mui/material';

const BookForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = () => {
    if (!name || !price || !category || !description) {
      setError('Please fill in all fields.');
      return;
    }

    if (isNaN(parseFloat(price))) {
      setError('Price must be a valid number.');
      return;
    }

    const newBook = {
      id: Date.now(), // You can use a unique ID generation method
      name,
      price: parseFloat(price),
      category,
      description,
    };
    dispatch(addBook(newBook));
    history('/');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Add a Book
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Category"
                variant="outlined"
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {error && (
                <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
                  {error}
                </Typography>
              )}
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default BookForm;

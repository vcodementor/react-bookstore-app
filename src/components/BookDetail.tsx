import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateBook } from '../redux/actions/bookAction';
import { RootState } from '../redux/reducers/rootReducer';
import { TextField, Button, Grid, Paper, Typography, Container } from '@mui/material';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const bookId = parseInt(id, 10);
  const book = useSelector((state: RootState) => state.books.find((b) => b.id === bookId));
  const dispatch = useDispatch();
  const history = useNavigate();

  const [editedBook, setEditedBook] = useState(book);

  useEffect(() => {
    setEditedBook(book);
  }, [book]);

  const handleSave = () => {
    if (editedBook) {
      dispatch(updateBook(editedBook));
    }
    history('/');
  };

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Edit Book
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={editedBook?.name}
              onChange={(e) => setEditedBook({ ...editedBook!, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              value={editedBook?.price}
              onChange={(e) => setEditedBook({ ...editedBook!, price: parseFloat(e.target.value) })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={editedBook?.category}
              onChange={(e) => setEditedBook({ ...editedBook!, category: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={editedBook?.description}
              onChange={(e) => setEditedBook({ ...editedBook!, description: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BookDetail;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { deleteBook } from '../redux/actions/bookAction';
import { Link } from 'react-router-dom';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Book from '../types/book';

const BookList: React.FC = () => {
  const books = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: '16px' }}>
        <Box display="flex" justifyContent="space-between" sx={{ padding: '16px 0' }}>
          <Typography variant="h5">Book List</Typography>
          <Link to="/book/add">
            <Button
              variant="contained"
              color="primary"
            >
              Add a Book
            </Button>
          </Link>
        </Box>
        <Table className="w-full">
          <TableHead sx={{ backgroundColor: '#1E88E5', color: 'white' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Name</TableCell>
              <TableCell sx={{color: 'white' }}>Price (USD)</TableCell>
              <TableCell sx={{ color: 'white' }}>Category</TableCell>
              <TableCell sx={{ color: 'white' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book:Book) => (
              <TableRow key={book.id}>
                <TableCell>{book.name}</TableCell>
                <TableCell>${book.price}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(deleteBook(book.id))}
                    sx={{ backgroundColor: '#FF3D00', color: 'white', marginRight: '8px' }}
                  >
                    <DeleteIcon />
                  </Button>
                  <Link to={`/book/${book.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ backgroundColor: '#00C853', color: 'white' }}
                    >
                      <EditIcon />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default BookList;

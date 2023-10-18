import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/errors/NotFound';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList/>} />
        <Route path="/books" element={<BookList/>} />
        <Route path="/book/add" element={<BookForm/>} />
        <Route path="/book/:id" element={<BookDetail/>} />
        <Route element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

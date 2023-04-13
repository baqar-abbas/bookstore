import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, addNewBook } from '../redux/books/booksSlice';

const BookInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title,
      author,
      category,
    }))
      .then(() => dispatch(addNewBook({
        item_id: uuidv4(),
        category,
        title,
        author,
      })));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-wrap">
      <h2 className="add-new-h2">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="title"
          id="title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select id="category" name="category" value={category} placeholder="Category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Science-Fiction">Science Fiction</option>
        </select>
        <button type="submit" className="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookInput;

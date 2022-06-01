/* eslint-disable no-nested-ternary */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import { AddedNote, getInitialData } from '../utils';
import '../styles/index.css';
import Footer from '../components/Footer';
import FormModal from '../components/FormModal';
import Input from '../components/FormComponent/Input';
import Note from '../components/Note';
import SearchNote from '../components/SearchNote';
import FilterNotes from '../components/FilterNotes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: getInitialData(),
      query: '',
      filter: '',
      title: '',
      body: '',
    };

    this.searchNotes = this.searchNotes.bind(this);
  }

  onChangeHandler = (val, key) => {
    this.setState({
      [key]: val,
    });
  };

  showModal = () => {
    const modal = document.getElementById('myModal');

    if (modal) {
      modal.style.display = 'block';
    }
  };

  searchNotes = (data) => data.filter((note) => {
    const { query } = this.state;
    const loweredCaseaNoteTitle = (note.title || '-').toLowerCase();
    const jammedNotetitle = loweredCaseaNoteTitle.replace(/\s/g, '');

    const loweredCaseQuery = query.toLowerCase();
    const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

    return jammedNotetitle.indexOf(jammedQuery) !== -1;
  });

  filterNotes = (data) => {
    const { filter } = this.state;
    if (filter === '1') {
      return data.filter((item) => item.archived === true);
    }
    if (filter === '0') {
      return data.filter((item) => item.archived === false);
    }
    return data;
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const addedNote = AddedNote({ title, body });
    this.setState((prev) => ({
      data: [
        ...prev.data,
        addedNote,
      ],
    }));
    this.onChangeHandler('', 'title');
    this.onChangeHandler('', 'body');
  };

  setIsArcived = (id) => {
    const { data } = this.state;
    const noteIndex = data.findIndex((note) => note.id === id);
    data[noteIndex].archived = !data[noteIndex].archived;
    return this.setState({ data });
  };

  deleteNote = (id) => {
    const { data } = this.state;
    const notes = data.filter((note) => note.id !== id);

    this.setState({ data: notes });
  };

  render() {
    const {
      data, title, body,
    } = this.state;
    return (
      <>
        <Navbar />
        <Banner />
        <main>
          <div className="title_container">
            <h2>Notes</h2>
            <button onClick={() => this.showModal()} type="button" id="modalBtn">+ New</button>
          </div>
          <div id="notes" className="filter_container">
            <SearchNote onChange={(e) => this.onChangeHandler(e.target.value, 'query')} />
            <FilterNotes onChange={(e) => this.onChangeHandler(e.target.value, 'filter')} />
          </div>
          <div className="notes-container">
            {!data || this.filterNotes(this.searchNotes(data)).length === 0 ? <p className="empty-notes">Notes empty</p>
              : this.filterNotes(this.searchNotes(data)).map((note) => (
                <Note
                  key={note.id}
                  data={note}
                  setArcived={this.setIsArcived}
                  onDelete={this.deleteNote}
                />
              ))}
          </div>
        </main>
        <Footer />
        <FormModal onSubmit={(e) => this.onSubmitHandler(e)}>
          <Input
            id="title"
            name="Title"
            placeholder="Enter note title ..."
            isRequired
            value={title}
            maxLength={50}
            onChange={(e) => (this.onChangeHandler(e.target.value, 'title'))}
          />
          <Input
            id="body"
            name="Body"
            placeholder="Enter note body ..."
            isRequired
            value={body}
            onChange={(e) => (this.onChangeHandler(e.target.value, 'body'))}
          />
          <input type="submit" value="Submit" />
        </FormModal>
      </>
    );
  }
}

export default App;

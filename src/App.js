import './App.css';

import {useState, useEffect } from "react";

import EmailList from "./components/sidebar/emaillist/emaillist.component";
import Content from "./components/content/content.component";
import SearchBar from "./components/searchbar/searchbar.component";
import Inbox from "./components/inbox/inbox.component";
import Trash from "./components/inbox/trash.component";

var currentFolder = "inbox";

function App() {
  const [emails, setEmails] = useState([]);
  const [content, setContent] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  useEffect (() => {
    const fetchEmails = async () => {;
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      const emails = await response.json();
      let filtered = [];
      filtered = emails.filter(email =>
        email.tag.includes(currentFolder));
      setEmails(emails);
      setFilteredEmails(filtered);
  };
    fetchEmails();
  }, []);

  /*
   * Filter emails based on the input string
   */

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = filteredEmails
    } else {
      filtered = emails.filter(email =>
        email.subject.toLowerCase().includes(searchInput.toLowerCase())
      );
      currentFolder = 'search'
    }
    setFilteredEmails(filtered);
  }, [searchInput]);

  /*
   * Change status of email and displays contents
   */

  const handleSidebarClick = (emailID) => {
    const email = emails.find(email => email.id === emailID);
    setContent(email);

    const updatedEmails = emails.map(email => {
      if (email.id === emailID) {
        email.read = "active";
      } else if (email.read === "active") {
        email.read = "true"
      }
      return email;
    });
    setEmails(updatedEmails);

    if (currentFolder === 'search'){
      return;
    }

    let filtered = [];
    filtered = updatedEmails.filter(email => email.tag.includes(currentFolder));
    setFilteredEmails(filtered);
  }

  /*
   * useEffect when enter button pressed
   */
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (event.target.value == "") {
       handleInbox();
      } else {
        setSearchInput(event.target.value);
      }
    }
  };

  /*
   * Emails with the tag 'inbox'
   */

  const handleInbox = () => {
    currentFolder = "inbox";
    let inbox = [];
    inbox = emails.filter(email =>
      email.tag.includes('inbox'));
    setFilteredEmails(inbox)
  };

  /*
   * Emails with the tag 'deleted'
   */

  const handleTrash = () => {
    currentFolder = "deleted";
    let trash = [];
    trash = emails.filter(email =>
      email.tag.includes('deleted'));
    setFilteredEmails(trash);
  };

  return (
    <div className='App'>
      <div className='Header'>
        
      </div>
      <div className='Body'>
        <div className='Menu'>
          <p>
            Inbox
            <button onClick={handleInbox}/>
          </p>
          <p>
            Trash
            <button onClick={handleTrash}/>
          </p>
        </div>
        <div className='Sidebar'>
          <p>
            Email Sidebar View
          </p>
          <div className='Search'>
            <SearchBar placeholder={"Press Enter To Search"} onKeyDown={handleSearch}/>
          </div>
          <EmailList emails = {filteredEmails} onSidebarClick={handleSidebarClick}/>
        </div>
        <div className='Main'>
          <Content email = {content}/>
        </div>
      </div>
    </div>
  );
}

export default App;

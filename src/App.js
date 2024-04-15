import React, { Component } from 'react';
import './App.css';

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    historyList: initialHistoryList,
    searchTerm: '',
  };

  handleSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(item => item.id !== id),
    }));
  };

  render() {
    const { historyList, searchTerm } = this.state;

    const filteredHistoryList = historyList.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
          </div>
          <input
            className="search-logo-1"
            type="search"
            placeholder="Search History"
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
        </div>
        {filteredHistoryList.length > 0 ? (
          <ul className="items">
            {filteredHistoryList.map(item => (
              <li key={item.id}>
                <div>
                  <img
                    src={item.logoUrl}
                    alt="domain logo"
                    className="domain-logo"
                  />
                </div>
                <div>
                  <p>{item.timeAccessed}</p>
                  <p>{item.title}</p>
                  <p>{item.domainUrl}</p>
                </div>
                <button
                  type="button"
                  data-testid="delete"
                  onClick={() => this.handleDelete(item.id)}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                    className="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no history to show</p>
        )}
        {/* Render additional empty list items if filtered history list is less than 10 */}
        {filteredHistoryList.length < 10 && (
          <ul className="items">
            {[...Array(10 - filteredHistoryList.length)].map((_, index) => (
              <li key={index + filteredHistoryList.length} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;

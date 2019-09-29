import React, { useRef } from 'react';

function SearchField ({setQuery}) {
  const el_searchField = useRef();

  function submitForm (e) {
    e.preventDefault();

    setQuery(el_searchField.current.value);
  }

  return (
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-container">
        <div className="uk-navbar-left">
          <div className="uk-navbar-item">
            <form className="uk-search uk-search-navbar" onSubmit={e => submitForm(e)}>
              <span data-uk-search-icon></span>
              <input className="uk-search-input" type="search" placeholder="Search..." ref={el_searchField}/>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SearchField;

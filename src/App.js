import React from 'react';
import './App.css';



class App extends React.Component  {
  static defaultProps= {
    store : {
    lists: [],
    allCards: {}
  }}

  render() {
    const store =this.props
    console.log(store)
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className= "App-list">
        {store.list.map(list => 
        <list 
        key= {list.id}
        header= {list.header}
        cards={list.cardIds.map(id => store.allCards[id])}
        />
        )}
      </div>
    </main>
  );
  }
}

export default App;

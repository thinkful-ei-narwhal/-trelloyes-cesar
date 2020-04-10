import React from 'react';
import './App.css';
import List from './List.js';
import STORE from './STORE'


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

class App extends React.Component {
  state = {
    store: STORE
  };

  handleAddItem = (listId) => {
    const newCard= newRandomCard()
    // console.log(newCard)
    const newList= this.state.store.lists.map(e=>{
      if(e.id===listId){
        return {
          ...e,
          cardIds: [...e.cardIds,newCard.id]
        };
      }
      return e;
    })
    // console.log(newList)
    this.setState( {
      store:{
        lists:newList,
        allCards:{
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }      
      }
    })
    // console.log(this.state.store)
  };

  handleDeleteItem = (cardId) => {
    // console.log(cardId)
    const newList= this.state.store.lists.map(e=>{
        return {
          ...e,
          cardIds: e.cardIds.filter(id=> id !== cardId)
        };
    })
    // console.log(newList)

    const newcards = omit(this.state.store.allCards, cardId)
    console.log(newcards)

    this.setState( {
      store:{
        lists:newList,
        allCards:newcards   
      }
    })
     console.log(this.state.store)
  };

  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list =>
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
              onAddItem={this.handleAddItem}
            />
          )}
        </div>
      </main>
    );
  }
}

export default App;

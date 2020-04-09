import React from 'react';
import Card from './Card';
import './List.css';


function List(props) {
    return (
        <section className='List'>
            <header className="List-Header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map(card =>
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        onDeleteItem={props.onDeleteItem}
                    />
                )}
                <button type="button" className="List-add-button" onClick={() =>props.onAddItem(props.id)}>
                + Add Random Card
                </button>
            </div>
        </section>
    );

}

List.defaultProps = {
    onAddItem: () => {},
  }

export default List;
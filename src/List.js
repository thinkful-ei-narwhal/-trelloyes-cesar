import React from 'react';
import Card from './Card';


function List(props) {
    return (
        <section className='List'>
            <header class="List-Header">
                <h2>{props.header}</h2>
            </header>
            <div class="List-cards">
                {props.cards.map(card =>
                    <Card
                        key={Card.id}
                        title={Card.title}
                        content={Card.content}

                    />
                )}
            </div>
        </section>
    );

}

export default List;
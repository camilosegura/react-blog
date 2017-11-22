import React from 'react';

const Card = ({document, addComment, children}) => (
    <article key={document.id} className="card mt-3">
        {document.title && <h3 className="card-header">
            {document.title}
        </h3>}
        <main className="card-body">{document.body}</main>
        <footer className="card-footer">
        <span>{document.voteScore} votes</span>
        <span> | by {document.author}</span>
        {(document.commentCount && <span> | {document.commentCount} comments 
            <i className="ion-plus-circled" role="button" style={{cursor: 'pointer'}} onClick={() => addComment()}></i>
        </span>)}
        <span> | created {new Date(document.timestamp).toLocaleDateString('en-US')}</span>
        </footer>
        {(children && children.length !==0) && <div className="card-body">
            {children}
        </div>}
    </article>
)

export default Card;
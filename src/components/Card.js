import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({document, addComment, edit, remove, voteUp, voteDown, onListView, children}) => (
    <article key={document.id} className="card mt-3">
        {document.title && <h3 className="card-header">
            {!onListView && document.title || <Link to={`/${document.category}/${document.id}`}>{document.title}</Link>}
        </h3>}
        {!onListView && <main className="card-body">{document.body}</main>}
        <footer className="card-footer">
        <span>{document.voteScore} votes <i className="ion-arrow-up-b" role="button" style={{cursor: 'pointer'}} title="Up Vote" onClick={() => voteUp(document.id)}></i>
          <i className="ion-arrow-down-b" role="button" style={{cursor: 'pointer'}} title="Down Vote" onClick={() => voteDown(document.id)}></i> </span>
        <span> | by {document.author}</span>
        {document.title && <span> | {document.commentCount || '0'} comments
            {!onListView && <i className="ion-plus-circled ml-2" role="button" style={{cursor: 'pointer'}} title="Add Comment" onClick={() => addComment()}></i>}
        </span>}
        <span> | created {new Date(document.timestamp).toLocaleDateString('en-US')}</span>
        <i className="ion-close-circled float-right ml-2" role="button" style={{cursor: 'pointer'}} title="Delete" onClick={() => remove(document.id)}></i>
        <i className="ion-edit float-right ml-2" role="button" style={{cursor: 'pointer'}} title="Edit" onClick={() => edit(document)}></i>
        </footer>
        {(children && children.length !==0) && <div className="card-body">
            {children}
        </div>}
    </article>
)

export default Card;

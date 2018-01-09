import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../utils/helpers';

const Card = ({document, addComment, edit, remove, voteUp, voteDown, onListView, children}) => {
  const { title, body, voteScore, author, commentCount, timestamp, id, category } = document;
  if (onListView) {
    return (
      <article key={id} className="card mt-3">
        {title && <h3 className="card-header">
            <Link to={`/${category}/${id}`}>{title}</Link>
        </h3>}
        <footer className="card-footer">
        <span>{voteScore} votes <i className="ion-arrow-up-b" role="button" style={{cursor: 'pointer'}} title="Up Vote" onClick={() => voteUp(id)}></i>
          <i className="ion-arrow-down-b" role="button" style={{cursor: 'pointer'}} title="Down Vote" onClick={() => voteDown(id)}></i> </span>
        <span> | by {author}</span>
        {title && <span> | {commentCount || '0'} comments
        </span>}
        <span> | created {dateFormat(timestamp)}</span>
        <i className="ion-close-circled float-right ml-2" role="button" style={{cursor: 'pointer'}} title="Delete" onClick={() => remove(id)}></i>
        <i className="ion-edit float-right ml-2" role="button" style={{cursor: 'pointer'}} title="Edit" onClick={() => edit(document)}></i>
        </footer>
        {(children && children.length !==0) && <div className="card-body">
            {children}
        </div>}
      </article>
    )
  } else {
    return (
      <article key={id} className="card mt-3">
        {title && <h3 className="card-header">
          {title}
        </h3>}
        <main className="card-body">{body}</main>
        <footer className="card-footer">
        <span>{voteScore} votes <i className="ion-arrow-up-b" role="button" style={{cursor: 'pointer'}} title="Up Vote" onClick={() => voteUp(id)}></i>
          <i className="ion-arrow-down-b" role="button" style={{cursor: 'pointer'}} title="Down Vote" onClick={() => voteDown(id)}></i> </span>
        <span> | by {author}</span>
        {title && <span> | {commentCount || '0'} comments
            <i className="ion-plus-circled ml-2" role="button" style={{cursor: 'pointer'}} title="Add Comment" onClick={() => addComment()}></i>
        </span>}
        <span> | created {dateFormat(timestamp)}</span>
        <i className="ion-close-circled float-right ml-2" role="button" style={{cursor: 'pointer'}} title="Delete" onClick={() => remove(id)}></i>
        <i className="ion-edit float-right ml-2" role="button" style={{cursor: 'pointer'}} title="Edit" onClick={() => edit(document)}></i>
        </footer>
        {(children && children.length !==0) && <div className="card-body">
            {children}
        </div>}
      </article>
    )
  }

}

export default Card;

import React, { useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else if (error) {
    return <p className="centered">{error}</p>;
  } else if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  const loadCommentsHandler = (
    <div className="centered">
      <Link className="btn--flat" to="comments">
        Load Comments
      </Link>
    </div>
  );

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Routes>
        <Route path="/" element={loadCommentsHandler} />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;

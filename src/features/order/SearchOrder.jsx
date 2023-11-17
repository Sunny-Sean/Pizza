import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg- placeholder: w-28 rounded-full bg-cyan-200 px-4 py-2
        text-sm transition-all duration-300 placeholder:text-slate-400
        focus:outline-none focus:ring focus:ring-cyan-500 focus:ring-opacity-50 sm:w-64
        sm:focus:w-72"
      ></input>
    </form>
  );
}

export default SearchOrder;

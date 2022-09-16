import { useEffect, useMemo, useState } from 'react';

import Link from 'next/link';

import styles from './Search.module.scss';

import { Matches, MatchesResponse } from '../types';

function Search () {
  const emptyResponse = useMemo(() => ({ articleTitles: {}, matches: [] }), []);

  const [query, setQuery]     = useState('');
  const [apiData, setApiData] = useState<MatchesResponse>(emptyResponse);

  function onChange (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setQuery(value);
  }

  useEffect(() => {
    if (query.length) {
      fetch(`/api/search?q=${query}`)
        .then((response) => response.json())
        .then((response) => {
          setApiData(response);
        })
      ;
    } else {
      setApiData(emptyResponse);
    }
  }, [emptyResponse, query]);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEARCH"
        type="text"
        onChange={onChange}
        value={query}
      />

      <table className={styles.matches}>
        <thead>
          <tr>
            <th className={styles.searchColumn}>Search Term</th>
            <th className={styles.resultColumn}>Result</th>
          </tr>
        </thead>
        <tbody>
          {
            apiData.matches.map(({ id, searchTerm, results }) => {
              return (
                <tr key={id}>
                  <td className={styles.searchColumn}>
                    {searchTerm}
                  </td>
                  <td className={styles.resultColumn}>
                    {
                      results.map((result: string) => {
                        return (
                          <div key={result}>
                            <Link href={`/articles/${result}`}>
                              <a>{apiData.articleTitles[result]}</a>
                            </Link>
                          </div>
                        );
                      })
                    }
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Search;

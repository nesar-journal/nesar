import { useEffect, useMemo, useState } from 'react';

import Link from 'next/link';

import styles from './Search.module.scss';

import { MatchesResponse } from '../types';

function Search () {
  const emptyResponse = useMemo(() => ({ articleTitles: {}, matches: [] }), []);

  const [query, setQuery]                         = useState('');
  const [apiData, setApiData]                     = useState<MatchesResponse>(emptyResponse);
  const [shouldShowResults, setShouldShowResults] = useState(false);

  function onChange (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) {
      setShouldShowResults(true);
    }
  }

  function onFocus (_event: React.FocusEvent<HTMLInputElement>) {
    if (query.length > 2) {
      setShouldShowResults(true);
    }
  }

  function onBlur (_event: React.FocusEvent<HTMLInputElement>) {
    setTimeout(() => {
      setShouldShowResults(false);
    }, 500);
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

  function renderInput () {
    return (
      <input
        className={styles.input}
        placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEARCH"
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={query}
      />
    );
  }

  function renderResults () {
    return (
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
    );
  }

  return (
    <div className={styles.search}>
      {renderInput()}
      {shouldShowResults && renderResults()}
    </div>
  );
}

export default Search;

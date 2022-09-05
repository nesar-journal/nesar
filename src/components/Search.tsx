import { useEffect, useState } from 'react';

import Link from 'next/link';

import styles from './Search.module.scss';

import { Matches } from '../types';

function Search () {
  const [query, setQuery]     = useState('');
  const [matches, setMatches] = useState<Matches>([]);

  function onChange (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setQuery(value);
  }

  useEffect(() => {
    if (query.length) {
      fetch(`/api/search?q=${query}`)
        .then((response) => response.json())
        .then((response) => {
          setMatches(response.matches);
        })
      ;
    } else {
      setMatches([]);
    }
  }, [query]);

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
            matches.map(({ searchTerm, results }) => {
              return (
                <tr key={searchTerm}>
                  <td className={styles.searchColumn}>
                    {searchTerm}
                  </td>
                  <td className={styles.resultColumn}>
                    {
                      results.map((result: string) => {
                        return (
                          <div key={result}>
                            <Link href="/articles/[result]" as={`/articles/${result}`}>
                              <a>{result}</a>
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

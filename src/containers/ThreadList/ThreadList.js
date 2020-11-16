import React from 'react';
import {Link} from 'react-router-dom';

import {useThreads} from '../../utils/contexts/threads';

import styles from './ThreadList.module.css';

function ThreadList() {
  const [threads, getThreads] = useThreads();

  React.useEffect(() => {
    getThreads();
  }, []);

  return threads.map(({title, author, lastUpdated, id, messages}) => {
    const date = new Date(lastUpdated);
    return (
      <Link key={`thread-${id}`} className={styles.threadListItem} to={`/${id}`}>
        <span className={styles.gradient}/>
        <span className={styles.title}>{title}</span>
        <div className={styles.threadInfos}>
          Created by {author}, {messages} messages, last updated on {date.toDateString()}
        </div>
      </Link>
    );
  });
}

ThreadList.propTypes = {};

export default ThreadList;
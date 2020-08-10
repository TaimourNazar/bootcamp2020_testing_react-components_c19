import React from 'react';
import axios from 'axios';
 
const URL = 'http://hn.algolia.com/api/v1/search';
 
function Story() {
  const [stories, setStories] = React.useState<any[]>([]);
  const [error, setError] = React.useState(null);
 
  async function handleFetch(event:any) {
    let result; 
    try {
        result = await axios.get(`${URL}?query=React`);
        setStories(result.data.hits);
    } 
    catch (error) {
      setError(error);
    }
  }
 
  return (
    <div>

      <button type="button" onClick={handleFetch}>Load Data</button>
      {<span>Error: </span> && error}

      <ol>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ol>

    </div>
  );
}
 
export default Story;
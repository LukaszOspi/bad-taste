import { useState, useEffect } from 'react';
import fetchOMDB from '../../services/fetchOMDB';
import { getUniqueListByKey } from '../../services/utilityFunctions';

const SwipeContainer = ({ mediaList, mediaDetails, setMediaDetails }) => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const dislikedMedia = [];
  const likedMedia = [];

  // for each element inside mediaList call the function fetchOMDB(), wait for the data fetch,
  // push the fetched data (an array of objects) inside unfilteredOutput.
  const unfilteredMediaList = async () => {
    const unfilteredOutput = [];
    for (let i = 0; i < mediaList.length; i++) {
      const promise = async () => {
        const fetchOutput = await fetchOMDB(mediaList[i].Name);
        unfilteredOutput.push(fetchOutput);
      };
      // call promise() and wait for it to complete before jumping to the next cycle in the
      // loop to avoid the return of a pending promise instead of actual data.
      await promise();
    }
    return unfilteredOutput;
  };

  const output = async (arr) => {
    // arr contains multiple arrays of objects: [ [{}, {}], [{}, {}, {}] ].
    // fullList spreads the objects inside the different arrays into a new one.
    // The output is an array of objects: [{}, {}, {}, {}, {}]
    const fullList = [];
    arr.forEach((e) => (!e ? null : fullList.push(...e)));

    // filter fullList checking each object's 'Title' key inside of it against
    // the 'Name' key of each of the objects in mediaList.
    // The some() method checks if any of the elements in an array pass a test
    // (provided as a callback function).
    const outputArrWithDuplicates = fullList.filter((e) =>
      mediaList.some((m) => m.Name.includes(e.Title))
    );

    // getUniqueListByKey() checks every object inside the outputArrWithDuplicates
    // array and keeps only the objects which 'imdbID' key is unique items (if 2 items
    // are the same the one that is kept is the second one).
    const outputArrUniqueValues = getUniqueListByKey(
      outputArrWithDuplicates,
      'imdbID'
    );
    return outputArrUniqueValues;
  };

  const filteredMediaList = async () => {
    await setMediaDetails(await output(await unfilteredMediaList()));
  };

  useEffect(() => {
    filteredMediaList();
  }, [mediaList]);

  useEffect(() => {
    console.log(mediaDetails);
  }, [mediaDetails]);

  const handleLike = (e) => {
    if (e.target.value === 'Dislike') {
      dislikedMedia.push(mediaDetails[displayIndex]);
    }
    likedMedia.push(mediaDetails[displayIndex]);
    setDisplayIndex(displayIndex + 1);
  };

  return (
    <>
      {mediaDetails.length === 0 ? null : (
        <div className="swipe-container">
          <div className="card-item">
            <h1>{mediaDetails[displayIndex].Title}</h1>
            <img alt="poster" src={mediaDetails[displayIndex].Poster} />
            <button onClick={handleLike}>Dislike</button>
            <button onClick={handleLike}>Like</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SwipeContainer;

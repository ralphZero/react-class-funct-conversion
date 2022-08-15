import React, { useState, useEffect } from 'react';

const FunctionalComponent = (props) => {
  const [state, setState] = useState({ count: props.count });

  useEffect(() => {

    let url = 'https://api.sampleapis.com/coffee/hot';
    fetch(url)
      .then(res => res.json())
      .then(data => setState({ ...state, coffee: data }))
  }, [])

  return (
    <>
      <h1>This is a class component {state.count}</h1>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>Change Count</button>
      <div>
        {state.coffee && state.coffee.map((coffee) => <h3 key={coffee.id}>{coffee.title}</h3>)}
      </div>
    </>
  );
}

export default FunctionalComponent;

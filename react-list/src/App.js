import React, { useEffect } from 'react';
import Loader from './Loader';

function App() {
  const [nameStudents, getNameStudents] = React.useState([]);
  const [statusStudents, getStatusStudents] = React.useState([]);
  const [loading, setloading] = React.useState(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/paraplancrm/api/students')
    .then(response => response.json())
    .then(nameStudents => {
      getNameStudents(nameStudents)
      setloading(false)
    })
  }, []);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/paraplancrm/api/statuses')
    .then(response => response.json())
    .then(statusStudents => {
      getStatusStudents(statusStudents)
      setloading(false)
    })
  }, []);

  return (
    <div className='wrapper'>
    <h1>React tutorial</h1>
    <React.Suspense fallback={<Loader />}>
    </React.Suspense>
    {loading && <Loader/>}
    </div>
)
};
export default App;
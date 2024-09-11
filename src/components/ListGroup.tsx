import { Fragment } from "react/jsx-runtime";
 
function ListGroup() {

  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ]
  
  return (
    <Fragment>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

       {items.map((item) =>(

        <li className="w-full px-4 py-2 rounded-b-lg" key={item}>{item}</li>
       ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

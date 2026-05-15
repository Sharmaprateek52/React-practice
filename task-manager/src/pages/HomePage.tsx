import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Clicking this navigates the user to /tasks */}
      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>
    </div>
  );
}

// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//     // Perform any logic here (e.g., save data, analytics tracking)
    
//     // Direct the user to the tasks page programmatically
//     navigate('/tasks'); 
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={handleNavigation}>
//         Process and Go to Tasks
//       </button>
//     </div>
//   );
// }


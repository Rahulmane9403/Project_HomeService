// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import RegistrationForm from './RegistrationForm';
// import WorkerRegistrationForm from './WorkerRegistrationForm';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<WorkerRegistrationForm />} />
//           <Route path="/" element={<LoginForm />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginForm'; // Correct import and match component name
import RegistrationForm from './RegistrationForm'; // User Registration
import WorkerRegistrationForm from './WorkerRegistrationForm'; // Worker Registration
import RoleSelection from './RoleSelection'; // Role selection page

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Use 'Login' here */}
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/register" element={<RegistrationForm />} /> {/* User Registration */}
          <Route path="/worker-register" element={<WorkerRegistrationForm />} /> {/* Worker Registration */}
          <Route path="/" element={<Login />} /> {/* Use 'Login' here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

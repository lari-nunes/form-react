// import React, { useState, useMemo } from 'react';
// import "./UserList.css"

// function App() {

//     // O useMemo é um hook do React que permite otimizar o desempenho do seu aplicativo,
//     //  memoizando o resultado de uma função de cálculo complexa.

//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);

//   const multiply = useMemo(() => {
//     console.log('Calculating multiplication...');
//     return number1 * number2;
//   }, [number1, number2]);

//   return (
//     <div className='container'>
//         <p>Calculating multiplication:</p>
//       <input
//         type="number"
//         value={number1}
//         onChange={(e) => setNumber1(Number(e.target.value))}
//       />
//       <p>X</p>
//       <input
//         type="number"
//         value={number2}
//         onChange={(e) => setNumber2(Number(e.target.value))}
//       />

//       <p>Resultado: {multiply}</p>

//     </div>
//   );
// }

// export default App;
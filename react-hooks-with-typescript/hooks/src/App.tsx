import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useImperativeHandle,
  useReducer,
} from 'react';

interface User {
  name: string,
  login: string,
  avatar_url: string
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<[User]>();

  // Nao posso usar isso pois nao ha necessidade de refazer este calculo toda vez que renderizar! Entao uso o useMemo()
  //const names = users?.map(user => user.name).join(', ');
  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);

  const greeting = useCallback(
    () => alert(`Hello ${ names }`),
    [names]
  );

  // async function loadData() {
  //   const response = await fetch('https://api.github.com/users/Gabriel-Alves-Cunha');
  //   const data = await response.json();
  // }

  inputRef.current?.focus();

  return (
    <form action="">
      <input type="text" ref={inputRef}/>
    </form>
  )
}

export default App;

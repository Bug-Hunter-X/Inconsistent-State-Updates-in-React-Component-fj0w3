```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 3); // Consolidate state updates
  };

  // anotherFunctionThatModifiesCount is removed as state is updated solely in handleClick

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```
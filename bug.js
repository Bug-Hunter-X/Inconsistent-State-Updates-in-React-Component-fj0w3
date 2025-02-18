```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the first render
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    // Incorrect way to add to count in a different location
    anotherFunctionThatModifiesCount();
  };

  const anotherFunctionThatModifiesCount = () => {
    setCount(prevCount => prevCount + 2); // This will cause unexpected behavior
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```
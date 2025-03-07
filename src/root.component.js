import { useEffect, useRef } from "react";
import "@zurich/web-components/styles.css";
import "@zurich/web-components/button";

function Home(props) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      alert(`Button clicked: ${props.name}`);
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener("click", handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, [props.name]);

  return (
    <section>
      <h1>{props.name} is mounted!</h1>
      <z-button ref={buttonRef} config="primary">
        {props.name}
      </z-button>
    </section>
  );
}

function App(props) {
  useEffect(() => {
    document.title = "React Hash Routing";
  }, []);

  return (<Home {...props} />);
}

export default App;

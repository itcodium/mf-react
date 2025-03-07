import { useEffect, useRef } from "react";
import "@zurich/web-components/styles.css";
import "@zurich/web-components/button";
import "@zurich/web-components/flag";
import "@zurich/web-components/toast";
import { ZrButton } from '@zurich/web-components/react/button';
import { ZrAlert } from '@zurich/web-components/react/alert';



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
      <ZrButton config="primary">
        React
      </ZrButton>
      <ZrButton icon="close" />
      <z-toast
        custom-str="bg: #06e7a3; color: #043929; radius:5px;"
      >
        Custom toast
      </z-toast>
      <z-button ref={buttonRef} config="primary">
        {props.name}
      </z-button>
      <z-flag
        country="ES"
        custom-str="size:70px"
      >
      </z-flag>
      <ZrAlert
        confirm-text="Okay"
        icon="align-text-center"
      >
        Alert text
      </ZrAlert>

    </section>
  );
}

function App(props) {
  useEffect(() => {
    document.title = "React Hash Routing";
  }, []);

  return <Home {...props} />;
}

export default App;


/*

     <ZrButton config="primary">
        {props.name}
      </ZrButton>
      <ZrButton config="secondary">
        {props.name}
      </ZrButton>
      <ZrButton config="negative">
        {props.name}
      </ZrButton>
      <ZrButton config="positive">
        {props.name}
      </ZrButton>
      <ZrButton config="link">
        {props.name}
      </ZrButton>
*/
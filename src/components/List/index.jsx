import HelloWorldItem from "../HelloWorld";
import "./index.css";

function HelloWorld() {
  return (
    <div className="navigation">
      <ul className="nav-list">
        <>
          <HelloWorldItem language="English" translation="Hello, World!" />
          <HelloWorldItem language="O'zbekcha" translation="Salom, Dunyo!" />
          <HelloWorldItem language="Русский" translation="Привет, Мир!" />
          <HelloWorldItem language="日本語 " translation="こんにちは、世界！" />
        </>
      </ul>
    </div>
  );
}

export default HelloWorld;

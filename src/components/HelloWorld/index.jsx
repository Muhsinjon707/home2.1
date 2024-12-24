import "./index.css";

function HelloWorldItem(props) {
    return (
      <li className="list-item">
        {props.language}: {props.translation}
      </li>
    );
}

export default HelloWorldItem;
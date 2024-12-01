import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <div>
        <h1>React Router vs aタグ Demo</h1>
        <p>count value - {count}</p>
        <nav>
          <a href="/a-tag">aタグで画面遷移</a> |{" "}
          <Link to="/router">React Routerで画面遷移</Link> |{" "}
          <Link to="/empty">空っぽのページへReact Router遷移</Link>
        </nav>
        <Routes>
          <Route path="/a-tag" element={<ATagPage />} />
          <Route path="/empty" element={<EmptyPage />} />
          <Route
            path="/router"
            element={<RouterPage count={count} setCount={setCount} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function EmptyPage() {
  return (
    <div>
      <h2>なんでもないページ</h2>
    </div>
  );
}

function ATagPage() {
  return (
    <div>
      <h2>aタグのページ</h2>
      <p>
        「戻る」は {`<a href="/">戻る</a>`}{" "}
        で実装されており、ブラウザがリロードされます。
      </p>
      <a href="/">戻る</a>
    </div>
  );
}

function RouterPage(props) {
  return (
    <div>
      <h2>React Routerのページ</h2>
      <p>
        「戻る」は {`<Link to="/">戻る</Link>`}{" "}
        で実装されており、ブラウザリロードは発生せず、状態が維持されます。
      </p>
      <button onClick={() => props.setCount(props.count + 1)}>
        カウント: {props.count}
      </button>
      <p>
        <Link to="/">戻る</Link>
      </p>
    </div>
  );
}

export default App;

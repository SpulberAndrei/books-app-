import "./App.css";
import BookCard from "./components/BookCard";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";

function App() {
  const books = Data.map((item) => {
    return <BookCard key={item.id} item={item} />;
  });

  return (
    <>
      <div className="app">
        <div>
          <Sidebar />
        </div>

        <div className="Cards">{books}</div>
      </div>
    </>
  );
}

export default App;

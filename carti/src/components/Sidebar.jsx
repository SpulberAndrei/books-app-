import Filter from "./Filter";
import PostBook from "./PostBook";

export default function Sidebar() {

  return (
    <>
      <div className="Sidebar">
        <h1>Books</h1>
        <Filter />
        <PostBook />
        
      </div>
    </>
  );
}

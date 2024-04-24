export default function FilterByPublishingHouse() {
  return (
    <div>
      <p className="FilterByPublishingHouse">Filter By Publishing House</p>
      <input className="SearchPublishing" type="text" placeholder="Search" />
      <div className="FilterPublishing">
        <input id="Nemira" type="radio" value="Nemira" />
        <label className="publish" htmlFor="Nemira">Nemira</label>
        <hr />
        <input id="Kriterrion" type="radio" value="Kriterrion" />
        <label  className="publish"htmlFor="Kriterrion">Kriterrion</label>
        <hr />
        <input id="Litera" type="radio" value="Litera" />
        <label className="publish" htmlFor="Litera">Litera</label>
        <hr />
        <input id="Valdo" type="radio" value="Valdo" />
        <label className="publish" htmlFor="Valdo">Valdo</label>
        <hr />
      </div>
    </div>
  );
}

export default function FilterByAuthor() {
  return (
    <div className="FilterByAuthor">
      <p className="FilterByAuthorTitle">Filter by Authors</p>
      <input className="SearchAuthor" type="text" placeholder="Search" />
      <div className="FilterAuthors">
        <input
          id="StephKing"
          type="radio"
          name="Filter By Authors"
          value="StephKing"
        />
        <label className="author" htmlFor="StephKing">Stephen King</label>
        <hr />
        <input
          id="DeanRK"
          type="radio"
          name="Filter By Authors"
          value="DeanRK"
        />
        <label className="author" htmlFor="DeanRK">Dean R Koontz</label>
        <hr />
        <input
          id="AgathaC"
          type="radio"
          name="Filter By Authors"
          value="AgathaC"
        />
        <label className="author" htmlFor="AgathaC">Agatha Christie</label>
        <hr />
        <input
          id="HPLove"
          type="radio"
          name="Filter By Authors"
          value="HPLove"
        />
        <label className="author" htmlFor="HPLove">H P Lovecraft</label>
        <hr />
        <input
          id="KevinDut"
          type="radio"
          name="Filter By Authors"
          value="KevinDut"
        />
        <label className="author" htmlFor="KevinDut">Kevin Duton</label>
        <hr />
        <input
          id="MManson"
          type="radio"
          name="Filter By Authors"
          value="MManson"
        />
        <label className="author" htmlFor="MManson">Mark Manson</label>
        <hr />
      </div>
    </div>
  );
}

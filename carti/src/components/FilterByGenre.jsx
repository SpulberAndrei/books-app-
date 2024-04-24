export default function FilterByGenre() {
  return (
    <div className="FilterByGenre">
      <p className="FilterByGenreTitle">Filter By Genre</p>
      <input type="text" placeholder="Search"></input>
      <div className="FilterByGenreGenres">
        <input type="radio" name="horror" value="horror" id="horror" />
        <label className="genre" htmlFor="horror">Horror</label>
        <hr />
        <input type="radio" name="horror" value="horror" id="thriller" />
        <label  className="genre" htmlFor="thriller">Thriller</label>
        <hr />
        <input type="radio" name="horror" value="horror" id="comedy" />
        <label  className="genre"htmlFor="comedy">Comedy</label>
        <hr />
        <input type="radio" name="horror" value="horror" id="romance" />
        <label className="genre" htmlFor="romance">Romance</label>
        <hr />
        <input type="radio" name="horror" value="horror" id="action" />
        <label className="genre" htmlFor="action">Action</label>
        <hr />
        <input type="radio" name="horror" value="horror" id="psychology" />
        <label className="genre" htmlFor="psychology">Psychology</label>
        <hr />
        <input type="radio" name="horror" value="horror" id="drama" />
        <label className="genre" htmlFor="drama">Drama</label>
        <hr />
      </div>
    </div>
  );
}

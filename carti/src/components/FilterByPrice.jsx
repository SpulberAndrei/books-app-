export default function FilterByPrice() {
  return (
    <div>
      <div className="FilterByPrice">
        <input type="range" id="price" name="price" min="0" max="999" />
        <label htmlFor="volume">Price Range</label>
      </div>
    </div>
  );
}

import FilterByAuthor from "./FilterByAuthor";
import FilterByGenre from "./FilterByGenre";
import FilterByPublishingHouse from "./FilterByPublishingHouse";
export default function Filter() {
  return (
    <>
      <div className="Filter">
        <FilterByAuthor />
        <FilterByGenre />
        <FilterByPublishingHouse />
      </div>
    </>
  );
}

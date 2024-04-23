import FilterByAuthor from "./FilterByAuthor";
import FilterByPrice from "./FilterByPrice";
import FilterByPublishingHouse from "./FilterByPublishingHouse";
export default function Filter() {
  return (
    <>
      <div className="Filter">
        <FilterByAuthor />
        <FilterByPrice />
        <FilterByPublishingHouse />
      </div>
    </>
  );
}

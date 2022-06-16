export const sortProducts = (array: any, type: string) => {
  switch (type) {
    case "descPrice":
      return array.sort((a, b) => a.price - b.price);
    case "ascPrice":
      return array.sort((a, b) => b.price - a.price);
    case "descPopular":
      return array.sort((a, b) => b.rating - a.rating);
    default:
      return array;
  }
};
export const reformatObject = (obj) => {
  return {
    brands: obj.filterBrands
      .filter((brand) => brand.checked)
      .map((i) => i.name),
    category: obj.filterCategories.filter((c) => c.checked).map((i) => i.name),
    rating: obj.filterRating
      .filter((rating) => rating.checked)
      .map((i) => i.status),
    price: obj.rangePrice,
  };
};
export const filterItems = (arr, objType) => {
  let res = arr;
  const filterObj = reformatObject(objType);
  for (let i in filterObj) {
    if (filterObj[i].length) {
      res = res.filter((el) => filterObj[i].includes(el[i]));
    }
    res = res.filter(
      (el) =>
        el.price > filterObj["price"].from && el.price < filterObj["price"].to
    );
  }
  return res;
};

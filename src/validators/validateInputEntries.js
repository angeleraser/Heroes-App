export const validateInputEntries = (entries) => {
  let values = [];
  for (const key in entries) {
    values = [...values, entries[key]];
  }
  return (
    values.every((val) => val.length > 3 && !/\s/.test(val)) &&
    values.some(
      (val) => val.includes("@gmail.com") || val.includes("@hotmail.com")
    )
  );
};

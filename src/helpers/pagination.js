export const pagination = (query) => {
  let page = parseInt(query.page, 10) || 1;
  let items = parseInt(query.list_size, 10) || 10;

  if (page < 1 || page >= Number.MAX_VALUE) page = 1;
  if (items < 1 || items >= Number.MAX_VALUE) items = 10;

  return {
    items,
    page: page - 1,
  };
};

import httpService from "./http.service";

const bookEndpoint = "book/";

const bookService = {
  get: async () => {
    const { data } = await httpService.get(bookEndpoint);
    return data;
  }
};
export default bookService;

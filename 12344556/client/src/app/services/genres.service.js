import httpService from "./http.service";

const genresEndpoint = "genre/";

const genresService = {
    fetchAll: async () => {
        const { data } = await httpService.get(genresEndpoint);
        return data;
    }
};

export default genresService;

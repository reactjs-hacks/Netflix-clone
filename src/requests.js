const API_KEY = "345f3d7dc171ade84a5395ddc3c9baee"

const requests = {
    fetchTreading: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchComedyMovies: `discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchRomanticMovies: `discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
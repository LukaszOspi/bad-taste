const keyLegend = {
  movie: {
    title: 'original_title',
    poster: 'poster_path',
    date: 'release_date',
    backdrop: 'backdrop_path',
    rating: 'vote_average',
    genres: 'genres',
    tagline: 'tagline',
    overview: 'overview',
    duration: 'runtime',
    crew: 'crew',
  },
  tv: {
    title: 'original_name',
    poster: 'poster_path',
    date: 'first_air_date',
    backdrop: 'backdrop_path',
    rating: 'vote_average',
    genres: 'genres',
    tagline: 'tagline',
    overview: 'overview',
    duration: 'episode_run_time',
    crew: 'crew',
  },
};

export default keyLegend;

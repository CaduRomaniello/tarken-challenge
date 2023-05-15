import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { SearchMovieDto } from './dto/search-movies.dto';

@Injectable()
export class OmdbApiService {
  async searchMoviesByTitle(searchMovieDto: SearchMovieDto): Promise<string> {
    return fetch(
      `http://www.omdbapi.com/?apikey=8fc25489&t=${searchMovieDto.title}&r=json`,
      {
        method: 'GET',
      },
    )
      .then(async (response) => {
        const r = await response.text();
        console.log(typeof r);
        return r;
      }) // Parse the response in JSON
      .catch((err) => {
        console.log(err);
        throw new ServiceUnavailableException();
      });

    // console.log(response);
  }

  searchMoviesByImdbId(searchMovieDto: SearchMovieDto): Promise<string> {
    console.log(searchMovieDto);
    return fetch(
      `http://www.omdbapi.com/?apikey=8fc25489&i=${searchMovieDto.imdbId}&r=json`,
      {
        method: 'GET',
      },
    )
      .then(async (response) => {
        const r = await response.text();
        console.log(r);
        return r;
      }) // Parse the response in JSON
      .catch((err) => {
        console.log(err);
        throw new ServiceUnavailableException();
      });

    // console.log(response);
  }
}

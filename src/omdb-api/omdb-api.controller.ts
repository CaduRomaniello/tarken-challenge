import { Body, Controller, Get } from '@nestjs/common';
import { OmdbApiService } from './omdb-api.service';
import { SearchMovieDto } from './dto/search-movies.dto';

@Controller('omdb-api')
export class OmdbApiController {
  constructor(private omdbApiService: OmdbApiService) {}

  @Get('/title')
  searchMoviesByTitle(@Body() searchMovieDto: SearchMovieDto): Promise<string> {
    return this.omdbApiService.searchMoviesByTitle(searchMovieDto);
  }

  @Get('/imdb-id')
  searchMoviesByImdbId(
    @Body() searchMovieDto: SearchMovieDto,
  ): Promise<string> {
    return this.omdbApiService.searchMoviesByImdbId(searchMovieDto);
  }
}

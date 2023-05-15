import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MovieService } from './movie.service';
import { GetUser } from 'src/auth/get-user.decorator';
import { Movie } from './movie.entity';
import { User } from 'src/auth/users.entity';

@Controller('movie')
@UseGuards(AuthGuard('jwt'))
export class MovieController {
  constructor(private moviesService: MovieService) {}

  // @Post()
  // addMovie(
  //   @Body() createTaskDto: CreateTaskDto,
  //   @GetUser() user: User,
  // ): Promise<Movie> {
  //   return this.moviesService.createTask(createTaskDto, user);
  // }
}

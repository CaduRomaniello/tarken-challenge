// import { Task } from 'src/tasks/task.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  imdRating: number;

  @Column()
  userRating: number;

  @Column()
  posterUrl: string;

  // @OneToMany((type) => Task, (task) => task.user, { eager: true })
  // tasks: Task[];
}

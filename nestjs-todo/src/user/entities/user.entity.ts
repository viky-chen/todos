import { CommonEntity } from 'src/common/common.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  password: string;

  tasks?: String[];
}

export const UserSchema = new CommonEntity<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  relations: {
    tasks: {
      type: 'one-to-many',
      target: 'Task', // the name of the PhotoSchema
    },
  },
});

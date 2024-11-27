import { CommonEntity } from 'src/common/common.entity';
import { Entity, Column, PrimaryGeneratedColumn, EntitySchema } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  completed: boolean;

  @Column()
  userId: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}

export const UserSchema = new CommonEntity<Task>({
  name: 'Task',
  target: Task,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    description: {
      type: String,
    },
    title: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  relations: {
    userId: {
      type: 'one-to-many',
      target: 'Task', // the name of the PhotoSchema
    },
  },
});

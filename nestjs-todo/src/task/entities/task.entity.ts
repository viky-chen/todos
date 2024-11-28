import { CommonEntity } from 'src/common/common.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column()
  completed: boolean;

  @Column()
  userId: number;

  @Column()
  createdAt: number;

  @Column()
  updatedAt: number;
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
      type: Number,
    },
    updatedAt: {
      type: Number,
    },
  },
  relations: {
    userId: {
      type: 'one-to-many',
      target: 'Task', // the name of the PhotoSchema
    },
  },
});

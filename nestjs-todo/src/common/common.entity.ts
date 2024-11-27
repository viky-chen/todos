import { EntitySchema, EntitySchemaOptions } from 'typeorm';

export class CommonEntity<T> extends EntitySchema<T> {
  constructor(options: EntitySchemaOptions<T>) {
    options.columns = {
      ...options.columns,
      createdAt: {
        type: Date,
      },
      updatedAt: {
        type: Date,
      },
    };
    super(options);
  }
}

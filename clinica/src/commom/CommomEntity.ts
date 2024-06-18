import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CommomEntity extends BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

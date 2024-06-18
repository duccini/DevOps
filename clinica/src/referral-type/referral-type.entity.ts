import { CommomEntity } from "src/commom/CommomEntity";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['description'])
export class ReferralType extends CommomEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: 'varchar', length: 20 })
    description: string;
}

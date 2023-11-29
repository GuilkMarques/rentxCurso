import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"

@Entity("brands")
class Brand{

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;


  @Column()
  description: string;

  @Column()
  sequence: string;


  @CreateDateColumn()
  created_at: Date;

  
  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

export { Brand };
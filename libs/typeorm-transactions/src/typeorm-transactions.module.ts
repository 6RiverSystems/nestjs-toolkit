import { Module } from "@nestjs/common";
import { TransactionalUnitOfWork } from "./transactional-unit-of-work.provider";
import { TransactionalRepository } from "./transactional-repostory.provider";

@Module({
  providers: [TransactionalUnitOfWork, TransactionalRepository],
  exports: [TransactionalUnitOfWork, TransactionalRepository],
})
export class TypeormTransactionsModule {}

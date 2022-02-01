import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanResolver } from './plan.resolver';

@Module({
  providers: [PlanService, PlanResolver]
})
export class PlanModule {}

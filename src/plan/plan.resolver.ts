import { Query, Resolver } from '@nestjs/graphql';
import { Plan } from './plan.entity';
import { PlanService } from './plan.service';

@Resolver(of =>Plan)
export class PlanResolver {

constructor(private planService:PlanService){}

@Query(returns =>[Plan])
plans():Promise<Plan[]>{
    return this.planService.findAll()
}




}

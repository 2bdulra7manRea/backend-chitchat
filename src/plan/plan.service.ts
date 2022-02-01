import { Injectable } from '@nestjs/common';
import { Plan } from './plan.entity';

@Injectable()
export class PlanService {

protected plansList:Plan[]=[
{name:"O P1 PLAN" , time:"sunday" , userId:"12031ahmed2"},
{name:"O P2 PLAN" , time:"sunday" , userId:"12031ahmed3"},
{name:"O P3 PLAN" , time:"sunday" , userId:"12031ahmed4"},
{name:"O P4 PLAN" , time:"sunday" , userId:"12031ahmed5"},
{name:"O P5 PLAN" , time:"sunday" , userId:"12031ahmed6"},
{name:"O P6 PLAN" , time:"sunday" , userId:"12031ahmed7"}
]


async findAll():Promise<Plan[]>{
return this.plansList
}







}

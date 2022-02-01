import { Query, Resolver } from '@nestjs/graphql';
import { Report } from './report.entity';
import { ReportService } from './report.service';

@Resolver(of =>Report)
export class ReportResolver {


constructor(private reportService:ReportService){}



@Query(returns =>[Report])
report():Promise<Report[]>{
return this.reportService.findAll()
}


}

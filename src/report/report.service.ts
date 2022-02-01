import { Injectable } from '@nestjs/common';
import { Report } from './report.entity';

@Injectable()
export class ReportService {


async findAll():Promise<Report[]>{
const rep=new Report()

rep.id="TUNFD94343EW"
rep.name="New Release project"

return [rep]
}



}

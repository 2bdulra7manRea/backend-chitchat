import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID, Repository } from 'typeorm';
import { Device } from '../models/device.entity';

@Injectable()
export class DeviceService {
constructor(@InjectRepository(Device) private readonly deviceRepostiry:Repository<Device>){}

async findAll():Promise<any>{

return await this.deviceRepostiry.find()

}

async find(filter){
    return this.deviceRepostiry.find(filter)
}

async findById(id):Promise<Device>{
    if(!id){
        throw new BadRequestException()
    }
    return this.deviceRepostiry.findOneOrFail(id)
}

async create(body){
    if(!body){
        throw new BadRequestException()
    }
    console.log(body,'this is body')
   const cr= await this.deviceRepostiry.create({name:body.name})
   return this.deviceRepostiry.save(cr)
}


async update(body){
    if(!body.id){
        throw new BadRequestException()
    }
    return this.deviceRepostiry.update({id:body.id},body)
}


async delete(id:string){
    if(!id){
        throw new BadRequestException()
    }
    return this.deviceRepostiry.delete({id:id})
}



}

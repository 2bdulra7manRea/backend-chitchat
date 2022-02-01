import { BadRequestException } from "@nestjs/common"
export class BaseService<T>{
    constructor(private readonly serviceRepository){}



    async findAll():Promise<any>{
    return await this.serviceRepository.find()
    }

    
    async find(filter){
        return this.serviceRepository.find(filter)
    }
    
    async findById(id):Promise<T>{
        if(!id){
            throw new BadRequestException()
        }
        return this.serviceRepository.findOneOrFail(id)
    }
    
    async create(body){
        if(!body){
            throw new BadRequestException()
        }
       const cr= await this.serviceRepository.create(body)
       return this.serviceRepository.save(cr)
    }
    
    
    async update(id:string,body){
        if(!id){
            throw new BadRequestException()
        }
         await this.serviceRepository.update(id,body)
        return this.serviceRepository.findOneOrFail(id)
    }
    
    
    async delete(id:string){
        if(!id){
            throw new BadRequestException()
        }
       await this.serviceRepository.delete(id)
       return {result:true}
    }




}
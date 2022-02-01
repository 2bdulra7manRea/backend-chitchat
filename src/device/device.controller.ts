import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {

constructor(private deviceService:DeviceService){}




@Post()
async post(@Body() body){
    return this.deviceService.create(body)
}


@Get()
async findAll(){
    console.log("inside get all")
    return this.deviceService.findAll()
}

 @Get()
async findbyId(@Param("id") id:string){
    return this.deviceService.findById(id)
}


@Get()
find(@Query("filter") filter){
    return this.deviceService.find(filter)
}

@Patch()
update(@Body() body){
    return this.deviceService.update(body)
}

@Delete()
delete(@Param("id") id){
    return this.deviceService.delete(id)
}


}

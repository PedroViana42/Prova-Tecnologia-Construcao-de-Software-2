import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  private readonly userSelect = {
    id: true,
    email: true,
    name: true,
    profileId: true,
    profile: true,
    createdAt: true,
    updatedAt: true,
  };


  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
      select: this.userSelect,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: this.userSelect,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
      select: this.userSelect,
    });
  }
}
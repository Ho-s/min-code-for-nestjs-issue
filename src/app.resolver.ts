import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';
import { Query } from '@nestjs/graphql';

@Injectable()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  getHello(): string {
    return this.appService.getHello();
  }
}

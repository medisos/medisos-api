import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { HomeController } from './controllers';
import { HomeService } from './services';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [HomeController],
  providers: [HomeService],
})
export class AppModule {}

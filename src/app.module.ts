import { Module } from '@nestjs/common';
import { HomeController } from './controllers';
import { HomeService } from './services';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService],
})
export class AppModule {}

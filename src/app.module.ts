import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [     
    TypeOrmModule.forRoot({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

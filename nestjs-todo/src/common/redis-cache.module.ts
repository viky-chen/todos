import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { Redis } from 'ioredis';
import { RedisCacheService } from './redis-cache.service';

@Module({
  imports: [
    // 初始化redis，redis参数建议配置到外部配置文件引入
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'redis://localhost:6379',
        },
      },
    ]),
  ],
  providers: [RedisCacheService, Redis],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}

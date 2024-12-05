import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Redis, type RedisKey } from 'ioredis';

// 自定义Redis服务
@Injectable()
export class RedisCacheService {
  constructor(private readonly redis: Redis) {}

  // 获取redis
  async get(key) {
    try {
      const res = await this.redis.get(key);
      return JSON.parse(res);
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  // 设置redis
  async set(key: string, value, ttl = 10000) {
    try {
      return await this.redis.set(key, JSON.stringify(value), 'EX', ttl);
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 删除redis
   */
  async delete(key: RedisKey[]) {
    try {
      return await this.redis.del(key);
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }
}

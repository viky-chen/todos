# TODO

> todo-list 学习项目，通过 todo-list 来学习各种技术栈。

## 数据模型

### User

```ts
interface User {
  id: string;
  name: string;
  isActive: boolean;
  tasks?: Task[];
}
```

### Task

```ts
interface Task {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## API

### 响应结构

```ts
enum ResponseCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  ERROR = 500,
}
// 服务器处理得到的响应结构
interface Response<T> {
  code: ResponseCode;
  message: string;
  data: T;
}
```

> API 相关接口

### User API

> 用户相关接口

#### GET /users

获取用户列表

#### GET /users/:id

获取用户详情

### Task API

#### GET /tasks

获取任务列表

#### GET /tasks/:id

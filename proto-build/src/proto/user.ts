// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.3
//   protoc               v3.21.11
// source: src/proto/user.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "user";

export interface GetUserRequest {
  id: number;
}

export interface GetUserResponse {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  id: string;
}

function createBaseGetUserRequest(): GetUserRequest {
  return { id: 0 };
}

export const GetUserRequest: MessageFns<GetUserRequest> = {
  encode(message: GetUserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserRequest>, I>>(base?: I): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(object: I): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetUserResponse(): GetUserResponse {
  return { id: 0, name: "", email: "" };
}

export const GetUserResponse: MessageFns<GetUserResponse> = {
  encode(message: GetUserResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserResponse {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
    };
  },

  toJSON(message: GetUserResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserResponse>, I>>(base?: I): GetUserResponse {
    return GetUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserResponse>, I>>(object: I): GetUserResponse {
    const message = createBaseGetUserResponse();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseCreateUserRequest(): CreateUserRequest {
  return { name: "", email: "", password: "" };
}

export const CreateUserRequest: MessageFns<CreateUserRequest> = {
  encode(message: CreateUserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserRequest>, I>>(base?: I): CreateUserRequest {
    return CreateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseCreateUserResponse(): CreateUserResponse {
  return { id: "" };
}

export const CreateUserResponse: MessageFns<CreateUserResponse> = {
  encode(message: CreateUserResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserResponse>, I>>(base?: I): CreateUserResponse {
    return CreateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(object: I): CreateUserResponse {
    const message = createBaseCreateUserResponse();
    message.id = object.id ?? "";
    return message;
  },
};

/** USER_SERVICE */
export interface UserService {
  getUser(request: GetUserRequest): Promise<GetUserResponse>;
  createUser(request: CreateUserRequest): Promise<CreateUserResponse>;
}

export const UserServiceServiceName = "user.UserService";
export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UserServiceServiceName;
    this.rpc = rpc;
    this.getUser = this.getUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  getUser(request: GetUserRequest): Promise<GetUserResponse> {
    const data = GetUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUser", data);
    return promise.then((data) => GetUserResponse.decode(new BinaryReader(data)));
  }

  createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const data = CreateUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUser", data);
    return promise.then((data) => CreateUserResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}

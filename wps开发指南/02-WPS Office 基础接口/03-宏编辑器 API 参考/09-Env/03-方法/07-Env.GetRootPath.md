# Env.GetRootPath

获取文件系统根目录路径。

## 语法

```typescript
function GetRootPath(): string
```

express   一个代表 **Env** 对象的变量。

## 返回值

根目录路径。

## 说明

Windows 上返回系统盘根目录（如 `C:/`），Linux/macOS 上返回 `/`。

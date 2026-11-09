# Platform.OS

返回当前操作系统的名称。

## 语法

```typescript
function OS(): string
```

express   一个代表 **Platform** 对象的变量。

## 返回值

操作系统名称字符串。

## 说明

返回值在编译时确定。可能的返回值：`"Windows"`、`"Linux"`、`"Darwin"`（macOS）、`"Android"`、`"ohos"`（鸿蒙）、`"iOS"`。注意 macOS 返回的是内核名称 `"Darwin"` 而非 `"macOS"`——这与 Node.js 的 `process.platform` 返回 `"darwin"` 类似，但首字母大写。

与 Node.js 对比：Node.js 返回 `"win32"`/`"linux"`/`"darwin"`（全小写），WPS 返回 `"Windows"`/`"Linux"`/`"Darwin"`（首字母大写）。

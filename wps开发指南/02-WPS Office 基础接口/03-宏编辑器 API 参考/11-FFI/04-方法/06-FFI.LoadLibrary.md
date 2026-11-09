# FFI.LoadLibrary

加载动态库文件，返回 [FFILibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFILibrary/obj) 对象。

## 语法

```typescript
function LoadLibrary(path: string): FFILibrary
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 库的路径或名称。可以是绝对路径（如 `"C:\\mylib.dll"`）、相对路径、或仅库名（如 `"user32"`）。 |

## 返回值

加载成功返回 [FFILibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFILibrary/obj) 对象。

## 说明

接受库的路径或名称。如果提供的不是绝对路径，会自动补全平台后缀（Windows: `.dll`，Linux: `.so`，macOS: `.dylib`）并按平台搜索顺序查找：Windows 搜索系统目录、Windows 目录、PATH 环境变量；Linux 搜索 LD_LIBRARY_PATH、`/lib`、`/usr/lib`；macOS 搜索 LD_LIBRARY_PATH、DYLD_LIBRARY_PATH、当前目录、DYLD_FALLBACK_LIBRARY_PATH。

有双重安全机制：首先禁止加载 WPS 安装目录下的库（防止宏劫持 WPS 自身的动态库），然后请求用户确认是否允许加载该库。安全检查未通过时抛出异常。加载失败时抛出异常并附带平台错误信息。

## 示例

```javascript
/* 加载系统库 */
var kernel32 = FFI.LoadLibrary("kernel32")
```

```javascript
/* 加载自定义库 */
var myLib = FFI.LoadLibrary("C:\\plugins\\mylib.dll")
```

# GetSetting

从持久化设置中读取一个值。

## 语法

```typescript
function GetSetting(AppName: string, Section: string, Key: string, Default?: any): string
// 须传入 3 或 4 个参数
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| AppName | 必选 | string | 应用程序名称，作为存储路径的第一级分组。 |
| Section | 必选 | string | 节名称，作为存储路径的第二级分组。 |
| Key | 必选 | string | 要读取的键名。 |
| Default | 可选 | any | Key 不存在时返回的默认值。省略时默认为空字符串。 |

## 返回值

存储的值（字符串），不存在时返回 Default 或空字符串。

## 说明

从应用程序设置存储中读取指定路径下的值。存储路径层级为 AppName → Section → Key，与 [SaveSetting](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/SaveSetting) 写入的值对应。
如果 AppName 或 Section 不存在，直接返回 Default 值（或空字符串）。如果 Key 不存在，返回 Default 值（或空字符串）。
所有返回值均为字符串类型。底层使用跨平台存储机制（Windows 上为注册表，macOS 上为 plist 文件，Linux 上为 INI 文件）。
调用时必须传入 3 个或 4 个参数（前三个 AppName、Section、Key 必选；第 4 个 Default 可选）；传入其他个数将导致调用失败。

## 示例

```javascript
/* 读取设置 */
function test() {
  const theme = GetSetting("MyMacro", "UI", "Theme", "light")
  Debug.Print("当前主题：" + theme)
}
```

```javascript
/* 检查设置是否存在 */
function test() {
  const val = GetSetting("MyMacro", "Config", "LastPath")
  if (val !== "") {
    Debug.Print("上次路径：" + val)
  } else {
    Debug.Print("未找到上次路径")
  }
}
```

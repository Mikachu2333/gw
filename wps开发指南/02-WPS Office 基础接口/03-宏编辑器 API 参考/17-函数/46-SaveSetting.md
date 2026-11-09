# SaveSetting

将一个值保存到持久化设置中。

## 语法

```typescript
function SaveSetting(AppName: string, Section: string, Key: string, Setting: string): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| AppName | 必选 | string | 应用程序名称，作为存储路径的第一级分组。 |
| Section | 必选 | string | 节名称，作为存储路径的第二级分组。 |
| Key | 必选 | string | 要保存的键名。 |
| Setting | 必选 | string | 要保存的值。 |

## 说明

将值写入应用程序设置存储的指定路径下。存储路径层级为 AppName → Section → Key，路径不存在时自动创建。
写入的值可通过 [GetSetting](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/GetSetting) 读取，通过 [DeleteSetting](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/DeleteSetting) 删除。
底层使用跨平台存储机制（Windows 上为注册表，macOS 上为 plist 文件，Linux 上为 INI 文件）。

## 示例

```javascript
/* 保存用户设置 */
function test() {
  SaveSetting("MyMacro", "UI", "Theme", "dark")
  SaveSetting("MyMacro", "UI", "FontSize", "14")
}
```

```javascript
/* 保存后读取验证 */
function test() {
  SaveSetting("MyMacro", "Config", "LastPath", "C:\\Documents")
  const path = GetSetting("MyMacro", "Config", "LastPath")
  Debug.Print("已保存路径：" + path)
}
```

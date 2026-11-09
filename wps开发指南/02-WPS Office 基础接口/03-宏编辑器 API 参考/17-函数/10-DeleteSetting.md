# DeleteSetting

从持久化设置中删除指定的节或键。

## 语法

```typescript
function DeleteSetting(AppName: string, Section: string, Key?: string): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| AppName | 必选 | string | 应用程序名称。 |
| Section | 必选 | string | 要删除的节名称。 |
| Key | 可选 | string | 要删除的键名。省略时删除整个 Section。 |

## 说明

从应用程序设置存储中删除数据。只传 AppName 和 Section 时删除整个 Section 及其下所有键值；同时传 Key 时只删除该 Section 下的指定键。
如果指定的 AppName 或 Section 不存在，调用将失败并报运行时错误。存储路径与 [SaveSetting](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/SaveSetting) 和 [GetSetting](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/GetSetting) 共享同一结构。

## 示例

```javascript
/* 删除单个键 */
function test() {
  DeleteSetting("MyMacro", "Config", "LastPath")
}
```

```javascript
/* 删除整个节 */
function test() {
  DeleteSetting("MyMacro", "Config")
  Debug.Print("Config 节已清空")
}
```

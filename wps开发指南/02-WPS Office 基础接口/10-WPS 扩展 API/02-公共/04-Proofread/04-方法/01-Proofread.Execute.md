
# Proofread.Execute

发起校对任务。校对过程中会多次回调，完成后返回错误项数量与列表。

## 语法

express.Execute(ProofreadMode, Callback)

express   一个代表 Proofread 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ProofreadMode | 必选 | number | 校对模式。`1` 通用校对；`3` 跨 Sheet 批量校对（表格）；`5` AI 校对。文字组件仅接受 `1`/`5`，其它值会被纠正为 `1`；未传时各组件使用默认值（文字/演示/PDF 为 `1`，表格为 `3`）。 |
| Callback | 必选 | Function | 进度与结果回调。入参为 `result` 对象。 |

## 返回值

boolean。表示是否成功受理本次校对请求（`true` 表示已启动或进入插件加载流程；`false` 表示立即拒绝，例如会话忙、文档无效、插件加载失败等）。

## 说明

### 回调 `result` 结构

| **字段** | **说明** |
| :------ | :------- |
| result.code | `0` 表示成功；`>= 10000` 为 JSAPI 协调层错误；其它非 `0` 为插件业务错误。 |
| result.message | 错误或状态描述。 |
| result.data | 附加数据对象（可能为空）。 |

成功进度回调时，`result.data` 常见字段：

| **字段** | **说明** |
| :------ | :------- |
| progress | 进度，取值范围 `0`–`100`；为 `100` 时表示完成。仅 `code === 0` 时由协调层写入。 |
| errorCount | 完成后错误项数量（`progress == 100` 时返回）。 |
| items | 完成后错误项列表（`progress == 100` 时返回）；后续错词接口的 `index` 取自该项。 |
| reason | 失败原因标识（可选，字符串）。 |

`items` 单项常见字段：

| **字段** | **数据类型** | **说明** |
| :------ | :---------- | :------- |
| index | number | 错误项索引，供后续错词接口使用。 |
| groupIndex | number | 组索引（相同错词视为同组）。 |
| typeCode | string | 错误类型标识。 |
| typeName | string | 错误类型名称。 |
| subTypeCode | string | 错误子类型标识。 |
| subTypeName | string | 错误子类型名称。 |
| errorWord | string | 错词。 |
| suggestWord | string | 建议词（取建议词列表首项；无建议词时可能不存在该字段）。 |
| description | string | 错误说明。 |
| status | number | 条目状态。`1` 未修改；`2` 已修改；`3` 已忽略；`4` 待修改；`5` 转注释。 |
| modifiedWord | string | 实际修改文本（已修改时有效）。 |
| isAI | boolean | 是否为 AI 能力结果。 |
| errorID | string | 错误项 ID。 |

### JSAPI 协调层错误码（`code >= 10000`）

| **code** | **说明** | **data.reason（常见）** |
| :------ | :------- | :------- |
| 10001 | 校对插件加载失败 | `pluginLoadFailed` |
| 10002 | 已有校对会话进行中 | `busy` |
| 10003 | 插件未就绪或未能真正启动 | `notReady` |
| 10004 | 参数非法（如错词索引无效） | `invalidIndex` |
| 10005 | 无校对权益（插件通用失败码 `1` 也会映射为此值） | 如 `no_proofread_privilege` 等 |
| 10006 | 用户未登录（由插件 `1200` 映射） | `user_not_logined` |

失败时还可结合 `result.data.reason` 区分具体原因（例如 `unsupported_proofread_mode`、`busy`、`invalid_document` 等）。

调用后需等待 `result.data.progress == 100` 再执行修改、忽略、撤销或获取上下文。完成后请调用 `Close` 释放校对资源。

## 示例

```javascript
// 文字：通用校对
var proofread = Application.ActiveDocument.GetDocumentEx().Proofread;
var started = proofread.Execute(1, function (result) {
    if (result.code >= 10000) {
        console.log("jsapi error", result.code, result.message, result.data && result.data.reason);
        return;
    }
    if (result.code !== 0) {
        console.log("plugin error", result.code, result.message, result.data && result.data.reason);
        return;
    }
    if (!result.data || result.data.progress < 100) {
        console.log("progress", result.data && result.data.progress);
        return;
    }
    console.log("errorCount=", result.data.errorCount);
    console.log("items=", result.data.items);
});
console.log("started=", started);
```

```javascript
// 文字：AI 校对
var proofread = Application.ActiveDocument.GetDocumentEx().Proofread;
proofread.Execute(5, function (result) {
    if (result.code === 0 && result.data && result.data.progress === 100) {
        console.log(result.data.items);
    }
});
```

```javascript
// 表格：批量校对（proofreadMode 推荐为 3）
var proofread = Application.ActiveWorkbook.GetWorkbookEx().Proofread;
proofread.Execute(3, function (result) {
    if (result.code === 0 && result.data && result.data.progress === 100) {
        console.log(result.data.items);
    }
});
```

```javascript
// 演示
var proofread = Application.ActivePresentation.GetPresentationEx().Proofread;
proofread.Execute(1, function (result) {
    console.log(result.code, result.data);
});
```

```javascript
// PDF
var proofread = Application.ActiveDocument.Proofread;
proofread.Execute(1, function (result) {
    console.log(result.code, result.data);
});
```

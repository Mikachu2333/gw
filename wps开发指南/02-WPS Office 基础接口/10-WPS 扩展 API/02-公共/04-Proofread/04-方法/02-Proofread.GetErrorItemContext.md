
# Proofread.GetErrorItemContext

获取指定错误项的上下文信息。

## 语法

express.GetErrorItemContext(Index, Callback)

express   一个代表 Proofread 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number | 错误项索引，取自 `Execute` 完成后回调中的 `result.data.items[i].index`。 |
| Callback | 必选 | Function | 结果回调。入参为 `result`（含 `code`、`message`、`data`）。 |

## 返回值

boolean。表示是否成功发起本次上下文查询请求。

## 说明

须在 `Execute` 完成（`progress == 100`）后调用。参数为平铺位置传参。

同一文档同时仅允许一个未完成的错词操作；若忙会通过回调返回 `code = 10002`（`data.reason` 通常为 `busy`）。

索引非法时回调 `code = 10004`（`data.reason` 通常为 `invalidIndex`）。

成功时（`result.code === 0`），`result.data` 字段：

| **字段** | **数据类型** | **说明** |
| :------ | :---------- | :------- |
| originalSentence | string | 错误项所在原句或上下文文本。 |
| start | number | 错误项在上下文中的起始位置。 |
| end | number | 错误项在上下文中的结束位置。 |

## 示例

```javascript
// 文字
var proofread = Application.ActiveDocument.GetDocumentEx().Proofread;
var ok = proofread.GetErrorItemContext(0, function (result) {
    if (result.code !== 0) {
        console.log(result.code, result.message, result.data);
        return;
    }
    console.log(result.data.originalSentence, result.data.start, result.data.end);
});
console.log("started=", ok);
```

```javascript
// 表格
var proofread = Application.ActiveWorkbook.GetWorkbookEx().Proofread;
proofread.GetErrorItemContext(0, function (result) {
    if (result.code !== 0) {
        console.log(result.code, result.message, result.data);
        return;
    }
    console.log(result.data.originalSentence, result.data.start, result.data.end);
});
```

```javascript
// 演示
var proofread = Application.ActivePresentation.GetPresentationEx().Proofread;
proofread.GetErrorItemContext(0, function (result) {
    if (result.code !== 0) {
        console.log(result.code, result.message, result.data);
        return;
    }
    console.log(result.data.originalSentence, result.data.start, result.data.end);
});
```

```javascript
// PDF
var proofread = Application.ActiveDocument.Proofread;
proofread.GetErrorItemContext(0, function (result) {
    if (result.code !== 0) {
        console.log(result.code, result.message, result.data);
        return;
    }
    console.log(result.data.originalSentence, result.data.start, result.data.end);
});
```

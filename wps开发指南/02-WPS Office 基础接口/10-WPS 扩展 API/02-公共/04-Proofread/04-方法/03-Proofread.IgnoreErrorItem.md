
# Proofread.IgnoreErrorItem

忽略指定错误项。

## 语法

express.IgnoreErrorItem(Index, Callback)

express   一个代表 Proofread 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number | 错误项索引，取自 `Execute` 完成后回调中的 `result.data.items[i].index`。 |
| Callback | 必选 | Function | 结果回调。入参为 `result`（含 `code`、`message`，失败时可能含 `data`）。 |

## 返回值

boolean。表示是否成功发起本次忽略请求。

## 说明

须在 `Execute` 完成（`progress == 100`）后调用。参数为平铺位置传参。

同一文档同时仅允许一个未完成的错词操作；若忙会通过回调返回 `code = 10002`（`data.reason` 通常为 `busy`）。

索引非法时回调 `code = 10004`（`data.reason` 通常为 `invalidIndex`）。

## 示例

```javascript
// 文字
var proofread = Application.ActiveDocument.GetDocumentEx().Proofread;
var ok = proofread.IgnoreErrorItem(0, function (result) {
    console.log(result.code, result.message, result.data);
});
console.log("started=", ok);
```

```javascript
// 表格
var proofread = Application.ActiveWorkbook.GetWorkbookEx().Proofread;
proofread.IgnoreErrorItem(0, function (result) {
    console.log(result.code, result.message, result.data);
});
```

```javascript
// 演示
var proofread = Application.ActivePresentation.GetPresentationEx().Proofread;
proofread.IgnoreErrorItem(0, function (result) {
    console.log(result.code, result.message, result.data);
});
```

```javascript
// PDF
var proofread = Application.ActiveDocument.Proofread;
proofread.IgnoreErrorItem(0, function (result) {
    console.log(result.code, result.message, result.data);
});
```


# Proofread.Close

关闭校对并释放相关资源。

## 语法

express.Close()

express   一个代表 Proofread 对象的变量。

## 参数

无

## 返回值

boolean。表示是否受理关闭请求。

## 说明

建议在完成修改、忽略、撤销或获取上下文等操作后调用，以退出校对态并释放插件侧资源。

若当前文档正在进行 `Execute`，调用后会中断该校对会话并释放会话锁。

## 示例

```javascript
// 文字
var proofread = Application.ActiveDocument.GetDocumentEx().Proofread;
console.log(proofread.Close());
```

```javascript
// 表格
var proofread = Application.ActiveWorkbook.GetWorkbookEx().Proofread;
console.log(proofread.Close());
```

```javascript
// 演示
var proofread = Application.ActivePresentation.GetPresentationEx().Proofread;
console.log(proofread.Close());
```

```javascript
// PDF
var proofread = Application.ActiveDocument.Proofread;
console.log(proofread.Close());
```

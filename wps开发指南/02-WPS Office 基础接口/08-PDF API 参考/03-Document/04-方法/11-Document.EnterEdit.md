# Document.EnterEdit

进入或退出编辑模式。

## 语法

express.**EnterEdit**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| bEdit | boolean | true=进入编辑, false=退出编辑 |

## 返回值

无

## 示例

```JavaScript
app.ActiveDocument.EnterEdit(true);  // 进入编辑
app.ActiveDocument.EnterEdit(false); // 退出编辑
```

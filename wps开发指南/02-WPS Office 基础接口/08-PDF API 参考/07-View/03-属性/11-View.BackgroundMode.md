# View.BackgroundMode

获取或设置背景模式。 **Long** 类型，可读写。

## 语法

express.**BackgroundMode**

express   一个代表 **View** 对象的变量。

## 类型

long

## 说明

**值说明**：

| 值 | 说明 |
|---|------|
| 0 | 默认 |
| 1 | 日间 |
| 2 | 夜间 |
| 3 | 护眼 |
| 4 | 羊皮纸 |

## 示例

```JavaScript
var view = app.ActiveWindow.ActiveView;
view.BackgroundMode = 1;
```

# UndoRedo.CanRedo

检查是否可以执行重做操作。

## 语法

express.**CanRedo**

express   一个代表 **UndoRedo** 对象的变量。

## 返回值

`boolean` — `true` 表示当前有可重做的操作，`false` 表示重做栈为空

## 示例

```JavaScript
var undoRedo = app.ActiveDocument.UndoRedo;
if (undoRedo.CanRedo()) {
    undoRedo.Redo();
}
```

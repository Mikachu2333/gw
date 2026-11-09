# UndoRedo.CanUndo

检查是否可以执行撤销操作。

## 语法

express.**CanUndo**

express   一个代表 **UndoRedo** 对象的变量。

## 返回值

`boolean` — `true` 表示当前有可撤销的操作，`false` 表示撤销栈为空

## 示例

```JavaScript
if (undoRedo.CanUndo()) {
    undoRedo.Undo();
}
```

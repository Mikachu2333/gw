# Options.VisualSelection

根据从右向左式语言文档中的可视光标移动，返回或设置选择行为。 **WdVisualSelection** 类型，可读写。



## 语法

express.**VisualSelection**

express   一个代表 **Options** 对象的变量。

## 类型

WdVisualSelection

## 说明


必须将 **CursorMovement** 属性设置为 **wdCursorMovementVisual** 才能使用此属性。



## 示例


```JavaScript
/*本示例判断如果插入点在双向文本中的前进方式为wdCursorMovementVisual，则将基于从右到左语言文档中可视光标移动的选择行为设置为wdVisualSelectionContinuous。*/
function test() {
    if (Options.CursorMovement == wdCursorMovementVisual) {
        Options.VisualSelection = wdVisualSelectionContinuous
    }
}
```


```JavaScript
/*本示例设置插入点在双向文本中的前进方式为wdCursorMovementVisual，然后显示基于从右到左语言文档中可视光标移动的选择行为是否为wdVisualSelectionBlock。*/
function test() {
    Options.CursorMovement = wdCursorMovementVisual
    alert(Options.VisualSelection == wdVisualSelectionBlock)
}
```

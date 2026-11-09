# Sequences.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **Sequences** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的交互式动画序列集合中的动画序列数量。*/
function test() {
    let sequences = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.InteractiveSequences
    alert(sequences.Count)
}
```

# Sequence.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **Sequence** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的动画序列中动画效果的数目。*/
function test() {
    let sequence = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence
    alert(sequence.Count)
}
```

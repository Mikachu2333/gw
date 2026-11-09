# Range.IsEqual

如果应用此方法的范围等于 _Range_ 参数所指定的范围，则该方法返回 **True** 。



## 语法

express.**IsEqual(Range)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 与 _expression_ 所定义的 **Range** 对象进行比较的范围。 |

## 返回值

Boolean

## 说明


此方法比较起始字符和结束字符的位置以及文字部分的类型。如果两个对象的所有三项都相同，则这两个对象相等。



## 示例


```JavaScript
/*本示例比较 range1 和 range2 来确定它们是否相等，如果这两个范围相等，则删除 range1 的内容。*/
function test() {
    let range1 = Selection.Words.Item(1)
    let range2 = ActiveDocument.Words.Item(3)
    if (range1.IsEqual(range2)) {
        range1.Delete()
    }
}
```


```JavaScript
/*本示例显示所选内容的范围是否与活动文档的第一个段落的范围相等。*/
function test() {
    alert(Selection.Range.IsEqual(ActiveDocument.Paragraphs.Item(1).Range))
}
```

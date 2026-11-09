# Selection.IsEqual

如果应用此方法的选择范围等于 *Range* 参数所指定的范围，则该方法为 **True** 。



## 语法

express.**IsEqual(Range)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 与当前选择范围进行比较的范围。 |

## 返回值

Boolean

## 说明


此方法比较起始字符和结束字符的位置以及文字部分的类型。如果所选内容和 *Range* 参数所指定的对象的所有三项都相同，则这两个对象相等。



## 示例


```JavaScript
/*本示例对活动文档第二段和选择范围进行比较，如果选择范围与第二段不相同，则选择第二段。*/
function test() {
    if (!Selection.IsEqual(ActiveDocument.Paragraphs.Item(2).Range)) {
        ActiveDocument.Paragraphs.Item(2).Range.Select()
    }
}
```


```JavaScript
/*本示例判断选中内容与活动文档指定范围是否相同，并通知用户。*/
function test() {
    let range = ActiveDocument.Range(0, 5)
    if (Selection.IsEqual(range)) {
        alert("选中内容与指定范围相同")
    } else {
        alert("选中内容与指定范围不相同")
    }
}
```

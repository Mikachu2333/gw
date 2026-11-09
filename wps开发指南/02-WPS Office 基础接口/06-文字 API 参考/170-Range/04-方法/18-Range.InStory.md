# Range.InStory

如果应用此方法的范围与 _Range_ 参数指定的范围位于相同的文字部分（文章：包含文档中可区别于其他文字区域的文字区域。例如，如果文档包括正文文本、脚注和标题，则文章包含主文章、脚注文章和标题文章。）中，则该方法返回 **True** 。



## 语法

express.**InStory(Range)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 指定此方法用来确定其是否包含在指定的 **Range** 对象内的范围。 |

## 返回值

Boolean

## 说明


一个范围只能属于一个文字部分。



## 示例


```JavaScript
/*本示例确定 range1 和 range2 是否位于同一文字部分中，如果是，则对 range1 应用加粗格式。*/
function test() {
    let range1 = Selection.Words.Item(1)
    let range2 = ActiveDocument.Range(20, 100)
    if (range1.InStory(range2)) {
        range1.Font.Bold = msoTrue
    }
}
```


```JavaScript
/*本示例显示所选内容与活动文档的主文档文章是否位于同一文字部分中。*/
function test() {
    alert(Selection.Range.InStory(ActiveDocument.Content))
}
```

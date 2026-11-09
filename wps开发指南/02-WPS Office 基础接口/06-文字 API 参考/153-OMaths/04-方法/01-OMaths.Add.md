# OMaths.Add

根据所指定区域中包含的文本公式创建一个公式，并且返回一个包含新公式的 **Range** 对象。



## 语法

express.**Add(Range)**

express   一个代表 **OMaths** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 指定一个包含文本公式的区域。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例将一个公式插入文档中的光标处或者替换所选文本。*/
function test() {
    let range = Selection.Range
    range.Text = "Celsius = (5/9)(Fahrenheit - 32)"
    range.Select()
    range = Selection.OMaths.Add(range)
    range.OMaths.Item(1).BuildUp()
}
```


```JavaScript
/*本示例将一个公式插入到活动文档中的新段落中。*/
function test() {
    let range = ActiveDocument.Paragraphs.Add().Range
    range.Text = "a + b = c"
    range.Select()
    ActiveDocument.OMaths.Add(range)
}
```

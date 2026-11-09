# Paragraphs.Add

返回一个 **Paragraph** 对象，该对象代表添加到文档中的新的空白段落。



## 语法

express.**Add(Range)**

express   一个代表 **Paragraphs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 可选 | any | 要在其前添加新段落的区域。新的段落不替换该区域。 |

## 返回值

Paragraph

## 说明


如果不指定 **Range** ，则将新段落添加到选定内容或区域之后，或者添加到文档最后，具体情况取决于 expression 的设置。



## 示例


```JavaScript
/*本示例在选定内容之后添加一个段落。*/
function test() {
    Application.Selection.Paragraphs.Add()
}
```


```JavaScript
/*本示例在选定内容中第一段之前添加一个段落标记。*/
function test() {
    Application.Selection.Paragraphs.Add(Selection.Paragraphs.Item(1).Range)
}
```


```JavaScript
/*本示例在活动文档第二段之前添加一个段落标记。*/
function test() {
    Application.ActiveDocument.Paragraphs.Add(ActiveDocument.Paragraphs.Item(2).Range)
}
```


```JavaScript
/*本示例在活动文档的末尾添加一个新的段落标记。*/
function test() {
    Application.ActiveDocument.Paragraphs.Add()
}
```

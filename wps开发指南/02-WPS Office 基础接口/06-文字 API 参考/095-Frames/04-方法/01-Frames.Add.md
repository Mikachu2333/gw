# Frames.Add

返回一个 Frame 对象，该对象代表添加到区域、选定内容或文档中的新框架。



## 语法

express.**Add(Range)**

express   一个代表 **Frames** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 框架所环绕的区域。 |

## 返回值

Frame

## 示例


```JavaScript
/*本示例在选定内容周围添加一个框架。*/
function test() {
    ActiveDocument.Frames.Add(Selection.Range)
}
```


```JavaScript
/*本示例在选定内容的第三段周围添加一个框架。*/
function test() {
    Selection.Frames.Add(Selection.Paragraphs(3).Range)
}
```

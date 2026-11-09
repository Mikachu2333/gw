# Sentences.First

返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj) 对象，该对象代表文档、区域或选定内容中的句子集合中的第一个句子。



## 语法

express.**First**

express   一个代表 **Sentences** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动文档中第一个句子的文本。*/
function test() {
    alert(ActiveDocument.Sentences.First.Text)
}
```


```JavaScript
/*本示例设置所选区域中第一句字体颜色为红色。*/
function test() {
    Selection.Sentences.First.Font.Color = RGB(255, 0, 0)
}
```

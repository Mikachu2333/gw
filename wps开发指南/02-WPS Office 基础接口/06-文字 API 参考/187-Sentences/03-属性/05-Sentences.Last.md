# Sentences.Last

返回一个 **Range** 对象，该对象代表文档、所选内容或范围中的最后一句。



## 语法

express.**Last**

express   一个代表 **Sentences** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示所选内容的最后一句的文本。*/
function test() {
    alert(Selection.Sentences.Last.Text)
}
```


```JavaScript
/*本示例将所选内容的最后一句字体的格式设置为倾斜格式。*/
function test() {
    Selection.Sentences.Last.Italic = true
}
```

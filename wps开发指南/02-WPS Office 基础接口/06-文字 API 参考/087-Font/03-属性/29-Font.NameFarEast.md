# Font.NameFarEast

返回或设置一种东亚字体名称。 **String** 类型，可读写。



## 语法

express.**NameFarEast**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 说明


在英语（美国）版的 WPS 中，本属性的默认值是 Times New Roman。推荐使用本属性返回或设置文档中的亚洲文本所用的字体。



## 示例


```JavaScript
/*本示例显示应用于选定内容的东亚字体名称。*/
function test() {
    alert(Selection.Font.NameFarEast)
}
```


```JavaScript
/*本示例将应用于活动文档的主文档文章的东亚字体设置为“黑体”。*/
function test() {
    let font = ActiveDocument.Content.Font
    font.NameFarEast = "黑体"
}
```

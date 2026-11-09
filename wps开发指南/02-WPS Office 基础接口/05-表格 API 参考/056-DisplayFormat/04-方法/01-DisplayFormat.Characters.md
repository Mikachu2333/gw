# DisplayFormat.Characters

返回一个 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/obj)** 对象，该对象代表当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的文本字符区域。只读。



## 语法

express.**Characters(Start, Length)**

express   一个代表 **DisplayFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | any | 要返回的第一个字符。如果此参数是 1 或被省略，则此属性返回一个以第一个字符为开头的字符区域。 |
| Length | 可选 | any | 要返回的字符数。如果省略此参数，则此属性返回字符串的后半部分（_Start_ 字符之后的所有字符）。 |

## 返回值

Characters

## 说明


 **Characters** 对象不是集合。



## 示例


```JavaScript
/*此示例显示 A3 单元格文本中前两个字符的字体颜色是否为红色。*/
function test() {
    alert(Range("A3").DisplayFormat.Characters(1, 2).Font.Color == RGB(255, 0, 0))
}
```


```JavaScript
/*此示例显示第一个工作表中 B5 单元格文本的字体大小。*/
function test() {
    alert(Worksheets.Item(1).Range("B5").DisplayFormat.Characters().Font.Size)
}
```

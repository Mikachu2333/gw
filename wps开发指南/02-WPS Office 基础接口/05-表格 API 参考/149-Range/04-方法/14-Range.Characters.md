# Range.Characters

返回 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/obj)** 对象，它代表对象文本内某个区域的字符。使用 **Characters** 对象可为文本字符串内的字符设置格式。



## 语法

express.**Characters(Start, Length)**

express   一个代表 **Range** 对象的变量。

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
/*此示例将 Sheet1 中 A1 单元格第三个字符的格式设为加粗。*/
function test() {
    let a1 = Worksheets.Item("Sheet1").Range("A1")
    a1.Value(undefined, "abcdefg")
    a1.Characters(3, 1).Font.Bold = true
}
```


```JavaScript
/*本示例将 A1 单元格的值设置为 This is A1,并显示 A1 单元格前四个字符的文本*/
function test() {
    Range("A1").Value2 = "This is A1"
    alert(Range("A1").Characters(1, 4).Text)
}
```

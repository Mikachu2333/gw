# Range.ID

返回或设置一个 **String** 值，它代表将页面另存为网页时指定单元格的识别标志。



## 语法

express.**ID**

express   一个代表 **Range** 对象的变量。

## 类型

string

## 说明


可将 ID 标签用作其他 HTML 文档或相同网页上的超链接引用。



## 示例


```JavaScript
/*此示例将活动工作表上 A1 单元格的 ID 设置为“target”。*/Application.ActiveSheet.Range("A1").ID = "target"/*之后，将文档另存为网页，并将下面的 HTML 行添加到网页中。 然后，当用户在 Web 浏览器中查看该页并用鼠标单击该超链接时，浏览器将显示该单元格。*/<A HREF="#target">Quarterly earnings</A>
```


```JavaScript
/*此示例将 A2 单元格的 ID 设置为 a2*/
function test() {
    Range("A2").ID = 'a2'
}
```


```JavaScript
/*本示例设置 A3 单元格的 ID 为 a3，并显示 A3 单元格 ID 属性的数据类型*/
function test() {
    Range("A3").ID = 'a3'
    alert(typeof Range("A3").ID)
}
```

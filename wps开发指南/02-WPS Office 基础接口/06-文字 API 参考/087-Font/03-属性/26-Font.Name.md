# Font.Name

返回或设置指定对象的名称。 **String** 类型，可读写。



## 语法

express.**Name**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将选定内容设置为 Arial 字体的加粗格式。*/
function test() {
    Application.Selection.Font.Name = "Arial"
    Application.Selection.Font.Bold = true
}
```


```JavaScript
/*本示例显示选定内容字体名称是否为“宋体”。*/
function test() {
    alert(Application.Selection.Font.Name == "宋体")
}
```

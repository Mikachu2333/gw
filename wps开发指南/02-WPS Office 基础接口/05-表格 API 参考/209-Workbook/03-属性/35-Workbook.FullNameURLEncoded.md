# Workbook.FullNameURLEncoded

返回一个 **String** 值，该值表示对象名称（包括其磁盘路径）。只读。



## 语法

express.**FullNameURLEncoded**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*在本示例中，ET 向用户显示活动工作簿的路径和文件名称。*/
function test() {
    // Display the full path to user.
    MsgBox(ActiveWorkbook.FullNameURLEncoded)
}
```


```JavaScript
/*本示例演示FullNameURLEncoded属性的数据类型和长度。*/
function test() {
    alert(`FullNameURLEncoded属性的数据类型为：${typeof ActiveWorkbook.FullNameURLEncoded}\nFullNameURLEncoded属性的长度为：${ActiveWorkbook.FullNameURLEncoded.length}`)
}
```

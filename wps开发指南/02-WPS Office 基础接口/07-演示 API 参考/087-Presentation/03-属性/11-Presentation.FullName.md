# Presentation.FullName

返回保存的演示文稿的名称，包括路径、当前文件系统分隔符和文件扩展名。只读。 **String** 类型。



## 语法

express.**FullName**

express   一个代表 **Presentation** 对象的变量。

## 类型

string

## 说明


此属性与 **Path** 属性等效，附加上当前文件系统分隔符和 **Name** 属性。



## 示例


```JavaScript
/*本示例显示当前演示文稿的路径和文件名（假设演示文稿已保存）。*/
function test() {
    alert(Application.ActivePresentation.FullName)
}
```


```JavaScript
/*本示例显示第一篇演示文稿的路径和文件名。*/
function test() {
    alert(Presentations.Item(1).FullName)
}
```

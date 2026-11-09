# AddIn.FullName

返回对象的名称（以字符串表示），包括其磁盘路径。 **String** 型，只读。



## 语法

express.**FullName**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示每一个可用加载宏的路径及文件名。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        alert(Application.AddIns.Item(i).FullName)
    }
}
```


```JavaScript
/*此示例将第一个加载宏的路径及文件名赋值给A1单元格。*/
function test() {
    Range("A1").Value2 = Application.AddIns.Item(1).FullName
}
```

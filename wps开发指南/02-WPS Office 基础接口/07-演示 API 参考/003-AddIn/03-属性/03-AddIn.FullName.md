# AddIn.FullName

返回指定的加载宏或保存的演示文稿的名称，包括路径、当前文件系统分隔符和文件扩展名。只读。



## 语法

express.**FullName**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 说明


此属性与 **Path** 属性等效，附加上当前文件系统分隔符和 **Name** 属性。



## 示例


```JavaScript
/*以下示例显示每一个可用加载宏的路径及文件名。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        alert(Application.AddIns.Item(i).FullName)
    }
}
```


```JavaScript
/*本示例显示应用程序第一个加载宏的路径及文件名。*/
function test() {
    alert(Application.AddIns.Item(1).FullName)
}
```

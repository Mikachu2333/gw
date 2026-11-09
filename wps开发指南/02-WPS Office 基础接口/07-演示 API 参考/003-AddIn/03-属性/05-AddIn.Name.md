# AddIn.Name

已注册的文件类型的加载项名称（标题）。只读。



## 语法

express.**Name**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 说明


如果包含某对象的集合的 **Item** 方法采用 **Variant** 类型的参数，则可以将该对象的名称与 **Item** 方法联合使用来返回对该对象的引用。例如，如果某个形状的 **Name** 属性值为“Rectangle 2”，则 `.Shapes.Item("Rectangle 2")` 将返回对该形状的引用。



## 示例


```JavaScript
/*本示例显示每一个可用加载宏的名称。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        alert(Application.AddIns.Item(i).Name)
    }
}
```


```JavaScript
/*本示例显示应用程序第一个加载宏的名称。*/
function test() {
    alert(Application.AddIns.Item(1).Name)
}
```

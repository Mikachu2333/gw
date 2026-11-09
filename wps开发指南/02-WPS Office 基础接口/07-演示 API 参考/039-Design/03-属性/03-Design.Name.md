# Design.Name

返回或设置指定对象的名称。 **String** 类型，可读/写。



## 语法

express.**Name**

express   一个代表 **Design** 对象的变量。

## 类型

string

## 说明


如果包含某对象的集合的 **Item** 方法采用 **Variant** 类型的参数，则可以将该对象的名称与 **Item** 方法联合使用来返回对该对象的引用。例如，如果某个形状的 **Name** 属性值为“Rectangle 2”，则 `.Shapes("Rectangle 2")` 将返回对该形状的引用。



## 示例


```JavaScript
/*本示例显示活动演示文稿中第一个设计模板的名称。*/
function test() {
    let designs = ActivePresentation.Designs
    alert(designs.Item(1).Name)
}
```


```JavaScript
/*本示例删除第一篇演示文稿名称以“Test”为结尾的设计模板，并通知用户。*/
function test() {
    let designs = Presentations.Item(1).Designs
    for (let i = designs.Count; i >= 1; i--) {
        if (designs.Item(i).Name.toUpperCase().endsWith("TEST")) {
            designs.Item(i).Delete()
            alert("已成功删除指定设计模板")
        }
    }
}
```

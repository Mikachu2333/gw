# Design.Delete

删除指定的 **Design** 对象。



## 语法

express.**Delete()**

express   一个代表 **Design** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿第一个设计模板。*/
function test() {
    ActivePresentation.Designs.Item(1).Delete()
}
```


```JavaScript
/*本示例删除第一篇演示文稿名称以“testDesign”为结尾的设计模板，并通知用户。*/
function test() {
    let designs = Presentations.Item(1).Designs
    for (let i = designs.Count; i >= 1; i--) {
        if (designs.Item(i).Name.toLowerCase().endsWith("testdesign")) {
            designs.Item(i).Delete()
            alert("已成功删除指定设计模板")
        }
    }
}
```

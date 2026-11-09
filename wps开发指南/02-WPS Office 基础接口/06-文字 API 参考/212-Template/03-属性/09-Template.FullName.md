# Template.FullName

指定模板的名称，其中包含驱动器或 Web 路径。 **String** 类型，只读。



## 语法

express.**FullName**

express   一个代表 **Template** 对象的变量。

## 类型

string

## 说明


使用该属性与按顺序使用 **Path、PathSeparator** 和 **Name** 属性的作用相同。



## 示例


```JavaScript
/*本示例显示活动文档附加模板的路径和文件名。*/
function test() {
    alert(ActiveDocument.AttachedTemplate.FullName)
}
```


```JavaScript
/*本示例将所有模板的路径和文件名插入到光标处。*/
function test() {
    for (let i = 1; i <= Templates.Count; i++) {
        Selection.TypeText(Templates.Item(i).FullName + "\n")
    }
}
```

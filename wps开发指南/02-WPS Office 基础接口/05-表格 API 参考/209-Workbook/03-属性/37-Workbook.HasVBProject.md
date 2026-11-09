# Workbook.HasVBProject

返回一个 **Boolean** 类型的值，该值代表工作簿是否具有附加的 VBA 项目。只读 **Boolean** 类型。



## 语法

express.**HasVBProject**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


在以编程方式决定是否需要将工作簿保存成支持宏的文件格式时，此属性最有用。如果以其他格式保存，则文档中包含的宏和代码项目可能丢失。



## 示例


```JavaScript
/*本示例演示活动工作簿是否具有附加的 VBA 项目。*/
function test() {
    alert(ActiveWorkbook.HasVBProject)
}
```


```JavaScript
/*本示例演示 HasVBProject 属性的数据类型。*/
function test() {
    alert(typeof ActiveWorkbook.HasVBProject)
}
```

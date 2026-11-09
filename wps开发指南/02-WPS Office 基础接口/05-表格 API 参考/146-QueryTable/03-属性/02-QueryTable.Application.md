# QueryTable.Application

如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象（可对 OLE 自动操作对象使用此属性来返回该对象的应用程序）。只读。




## 语法

express.**Application**

express   一个代表 **QueryTable** 对象的变量。

## 类型

Application

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **Application** 属性。




## 示例


```JavaScript
//本示例显示一条有关创建 myObject 的应用程序的消息。
function test()
{
    let myObject = Application.ActiveWorkbook
    if(myObject.Application.Value == "ET") 
    {
	alert("This is an ET Application object.")
    }
    else 
    {
	alert("This is not an ET Application object.")
    }
}
```

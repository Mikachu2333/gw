# Name.MacroType

返回或设置名称所引用的对象类型。 **[XlXLMMacroType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXLMMacroType)** 类型，可读写。



## 语法

express.**MacroType**

express   一个代表 **Name** 对象的变量。

## 类型

XlXLMMacroType

## 说明


| **XlXLMMacroType** 可为以下 **XlXLMMacroType** 常量之一。 |
| ------------------------------------------------ |
| **xlCommand** 引用一个用户定义宏的名称。                      |
| **xlFunction** 引用一个用户定义函数的名称。                    |
| **xlNotXLM** 此名称不引用函数或宏。                         |



## 示例


```JavaScript
/*本示例将索引为1的名称的 MacroType 属性设置为 xlNotXLM。*/
function test() {
    Application.ActiveWorkbook.Names.Item(1).MacroType = xlNotXLM
}
```


```JavaScript
/*本示例显示 Sheet1 中名为“test1”的名称的 MacroType 属性是否为 xlFunction。*/
function test() {
    alert(Application.Worksheets.Item("Sheet1").Names.Item("test1").MacroType == xlFunction)
}
```

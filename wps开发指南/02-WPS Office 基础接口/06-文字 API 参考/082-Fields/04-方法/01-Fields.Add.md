# Fields.Add

将 **[Field](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/obj)** 对象添加到 **Fields** 集合。返回指定区域内的 **Field** 对象。



## 语法

express.**Add(Range, Type, Text, PreserveFormatting)**

express   一个代表 **Fields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 需要添加域的区域。如果该区域未折叠，那么域将替换该区域。 |
| Type | 可选 | any | 可以是任意 WdFieldType 常量。有关有效的常量列表，请参阅“对象浏览器”。默认值为 wdFieldEmpty。 |
| Text | 可选 | any | 域所需的其他文本。例如，如果要给域指定一个开关，可将其添加到此处。 |
| PreserveFormatting | 可选 | any | 如果该属性值为 True，则更新时保留域所应用的格式。 |

## 返回值

Field

## 说明


不能用 **Fields** 集合的 **Add** 方法来插入诸如 **wdFieldOCX** 和 **wdFieldFormCheckBox** 之类的域，而应使用诸如 **FormFields** 集合的 **AddOLEControl** 方法和 **Add** 方法。



## 示例


```JavaScript
/*本示例在选定内容的开始处插入一个 USERNAME 域。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let field = ActiveDocument.Fields.Add(Selection.Range, wdFieldUserName)
}
```


```JavaScript
/*本示例在所选内容的末尾插入一个 LISTNUM 域。 起始开关设为从 3 开始。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    ActiveDocument.Fields.Add(Selection.Range, wdFieldListNum, "\\s 3")
}
```


```JavaScript
/*本示例在选定内容的开始处插入一个 DATE 域，然后显示域结果的文本。*/
function test() {
    Application.Selection.Collapse(wdCollapseStart)
    let field = Application.ActiveDocument.Fields.Add(Application.Selection.Range, wdFieldDate)
    alert(field.Result.Text)
}
```

# CustomProperties.Add

添加自定义属性信息，返回一个代表自定义属性信息的 **[CustomProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperty/obj)** 对象。



## 语法

express.**Add(Name, Value)**

express   一个代表 **CustomProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 自定义属性的名称。 |
| Value | 必选 | any | 自定义属性的值。 |

## 返回值

一个 CustomProperty 对象，表示自定义属性信息。

## 示例


```JavaScript
/*此示例向活动工作表添加标识符信息，并将其名称和值返回给用户*/
function test() {
    // Add metadata to worksheet.
    ActiveSheet.CustomProperties.Add("Market", "Nasdaq")

    // Display metadata.
    let customProperty = ActiveSheet.CustomProperties.Item(1)
    alert(customProperty.Name + "\t" + customProperty.Value)
}
```


```JavaScript
/*此示例向第一张工作表添加标识符信息。*/
function test() {
    Worksheets.Item(1).CustomProperties.Add("Test2", "hello")
}
```

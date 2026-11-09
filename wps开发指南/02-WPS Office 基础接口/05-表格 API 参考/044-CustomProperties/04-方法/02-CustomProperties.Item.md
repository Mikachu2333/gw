# CustomProperties.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **CustomProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

CustomProperty

## 示例


```JavaScript
/*在此示例中，ET 向活动工作表添加标识符信息，并向用户返回名称和值*/
function test() {
    // Add metadata to worksheet.
    ActiveSheet.CustomProperties.Add("Market", "Nasdaq")

    // Display metadata.
    let customProperty = ActiveSheet.CustomProperties.Item(1)
    alert(customProperty.Name + "\t" + customProperty.Value)
}
```


```JavaScript
/*此示例设置第一张工作表第一个标识符的名称。*/
function test() {
    Worksheets.Item(1).CustomProperties.Item(1).Name = "Test1"
}
```

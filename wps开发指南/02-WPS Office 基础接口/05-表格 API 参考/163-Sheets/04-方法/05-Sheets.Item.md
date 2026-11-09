# Sheets.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Sheets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Object

## 示例


```JavaScript
/*此示例激活工作表 Sheet1。*/
function test() {
    Application.Sheets.Item("Sheet1").Activate()
}
```


```JavaScript
/*本示例显示活动工作簿中的每个工作表的名称。*/
function test() {
    let sheets = Application.ActiveWorkbook.Sheets
    for (let i = 1; i <= sheets.Count; i++) {
        alert(sheets.Item(i).Name)
    }
}
```

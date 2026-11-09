# AddIn.progID

返回对象的程序标识符。 **String** 型，只读。



## 语法

express.**progID**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例为所有加载宏创建程序标识符列表。*/
function test() {
    let addIns = Application.AddIns
    for (let i = 1; i <= addIns.Count; i++) {
        Application.Worksheets.Item(1).Cells.Item(i, 1).Value2 = addIns.Item(i).ProgId
    }
}
```


```JavaScript
/*本示例显示ANALYS32加载项的程序标识符。*/
function test() {
    alert(Application.AddIns.Item("ANALYS32").progID)
}
```

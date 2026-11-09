# AddIns.Add

返回一个 **AddIn** 对象，该对象代表一个添加到加载项列表中的加载项文件。



## 语法

express.**Add(FileName)**

express   一个代表 **AddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 包含要添加到加载项列表中的加载项的文件的完整名称（包括路径和文件扩展名）。 |

## 返回值

AddIn

## 说明


此方法并不加载新的加载项。必须设置 **Loaded** 属性才能加载该加载项。



## 示例


```JavaScript
/*本示例将“addin.ppam”添加到“加载项”对话框的列表中，然后加载它（请注意，调用Add方法是传入加载项的文件名，而不是其标题）。*/
function test() {
    Application.AddIns.Add("D:\\addin.ppam").Loaded = msoTrue
}
```


```JavaScript
/*本示例将应用程序所在的路径中名为“addin.ppam”的加载项添加到加载项列表中。*/
function test() {
    let path = Application.Path + "\\addin.ppam"
    Application.AddIns.Add(path)
}
```

# AddIns.Unload

卸载所有已加载的加载项，并根据 *RemoveFromList* 参数值删除 **AddIns** 集合中相应的加载项。



## 语法

express.**Unload(RemoveFromList)**

express   一个代表 **AddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RemoveFromList | 必选 | boolean | 如果为 **True** ，则从 **AddIns** 集合中删除已卸载的加载项（从 **“模板和加载项”** 对话框中删除名称）。如果为 **False** ，则保留集合中已卸载的加载项。如果已卸载的加载项的 **Autoload** 属性返回 **True** ，则 **Unload** 无法从 **AddIns** 集合中删除该加载项，而不考虑 RemoveFromList 的值是什么。 |

## 返回值

void

## 说明


要卸载单个模板或 WLL，请将 **AddIn** 对象的 **Installed** 属性设置为 **False** 。要从 **AddIns** 集合中删除单个模板或 WLL，请将 **Delete** 方法应用于 **AddIn** 对象。



## 示例


```JavaScript
/*此示例卸载“模板和加载项”对话框中列出的所有加载项，而加载项的名称还保留在 AddIns 集合中。*/
function test() {
    if (Application.AddIns.Count > 0) {
        Application.AddIns.Unload(false)
    }
}
```


```JavaScript
/*本示例卸载所有加载项且不保留名称在 AddIns 集合中。*/
function test() {
    Application.AddIns.Unload(true)
}
```

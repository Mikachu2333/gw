# Application.AddIns

返回一个 **AddIns** 集合，该集合代表所有有效加载项，而不考虑当前是否已加载它们。只读。



## 语法

express.**AddIns**

express   一个代表 **Application** 对象的变量。

## 类型

AddIns

## 说明


此 **AddIns** 集合包含全局模板和 **“工具”** 菜单的 **“加载项”** 对话框中所列的 WPS 加载项库（即 WLL）。有关返回集合中单个成员的信息，请参阅返回集合中的对象。



## 示例


```JavaScript
/*此示例显示加载项的总数。*/
function test() {
    let addIns = Application.AddIns.Count
    alert(`加载项的总数为: ${addIns} `)
}
```


```JavaScript
/*此示例显示 Addins 集合中每一加载项的名称。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        alert(Application.AddIns.Item(i).Name)
    }
}
```

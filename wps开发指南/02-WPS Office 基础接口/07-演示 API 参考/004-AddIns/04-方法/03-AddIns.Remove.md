# AddIns.Remove

从加载宏集合中删除一个加载宏。




## 语法

express.**Remove(Index)**

express   一个代表 **AddIns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要从集合中删除的加载宏的名称。 |

## 返回值

void

## 示例
本示例从可用加载宏的列表中删除名为“MyTools”的加载宏。



```JavaScript
示例代码 
Appliaction.AddIns.Remove("mytools")
```

# Debug.ShowWeak

遍历当前 JS 引擎中所有 Persistent 句柄并按类型分组统计输出。

## 语法

```typescript
function ShowWeak(): void
```

express   一个代表 **Debug** 对象的变量。

## 说明

在"立即窗口"中输出当前 JS 引擎中所有 Persistent 句柄的分类统计信息，用于诊断对象的生命周期和排查内存泄漏。

输出分为两个部分：
- `VisitHandlesWithClassIds`：统计所有设置了 class_id 的 Persistent 句柄数量，按 class_id 分组。
  其中 class_id 为 `3d5` 的条目表示 WPS JS API 的内部对象包装。
- `VisitWeakHandles`：统计所有弱引用句柄数量，同样按 class_id 分组。
  弱引用是允许垃圾回收器在没有其他强引用时自动回收的引用。

每行输出格式为 `{class_id}: {数量}`，两个值均为十六进制。两个部分的统计互相独立。

典型用法是与 [Debug.GC](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Debug/member/GC) 配合：先调用 `Debug.GC()` 强制垃圾回收清理可回收对象，
再调用 `Debug.ShowWeak()` 查看仍然存活的 Persistent 句柄——如果 GC 后某些对象数量未减少，
可能意味着存在内存泄漏或意外的引用持有。

输出显示在与 [Debug.Print](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Debug/member/Print) 相同的"立即窗口"中。

虽然语法上允许传入参数，但实现中不使用任何参数，传入参数不影响行为。

## 示例

```javascript
/* 配合 GC 诊断内存泄漏 */
function test() {
  Debug.GC()
  Debug.ShowWeak()
}
```

```javascript
/* 输出示例 */
VisitHandlesWithClassIds:
3d5: 2a
0: 5
VisitWeakHandles:
3d5: a
```

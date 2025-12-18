| Hook / Feature                          | Server Component       | Client Component                |
| --------------------------------------- | ---------------------- | ------------------------------- |
| `useState`, `useEffect`, `useRef`, etc. | ❌ Not allowed          | ✅ Allowed                       |
| Async `await fetch()`                   | ✅ Allowed              | ⚠️ Allowed (but runs on client) |
| Access `cookies()`, `headers()`         | ✅ Allowed              | ❌ Not allowed                   |
| Access DOM / window                     | ❌ Not allowed          | ✅ Allowed                       |
| Use Context Provider                    | ✅ Yes (server context) | ✅ Yes (client context)          |


Pure function -> function which does not have any side effects.
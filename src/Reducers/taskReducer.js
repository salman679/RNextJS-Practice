export default function taskReducers(Tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...Tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "changed":
      return Tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });

    case "deleted":
      return Tasks.filter((t) => t.id !== action.id);
    default:
      throw Error(`no action matched with ${action.type}`);
  }
}

//   if (action.type === "added") {
//     return [
//       ...Tasks,
//       {
//         id: action.id,
//         text: action.text,
//         done: false,
//       },
//     ];
//   } else if (action.type === "changed") {
//     return Tasks.map((t) => {
//       if (t.id === action.task.id) {
//         return action.task;
//       } else {
//         return t;
//       }
//     });
//   } else if (action.type === "deleted") {
//     return Tasks.filter((t) => t.id !== action.id);
//   } else {
//     throw Error(`no action matched with ${action.type}`);
//   }

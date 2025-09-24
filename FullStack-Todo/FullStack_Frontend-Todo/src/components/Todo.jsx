// imr - import React from 'react';
// imdr - import ReactDOM from 'react-dom';
// control + shift + x
// rafce
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  // let [isTodo, setTodo] = useState(["sameple task"]);
  let [isTodo, setTodo] = useState([
    // initial value can be empty too
    {
      id: uuidv4(), //default
      task: "Sample task",
      isCompleted: false,
      toggleCase: false, // Add this to each task
      isDone: false,
    },
  ]);

  let [isNewTodo, setNewTodo] = useState("");

  // State to track which task is being edited
  const [isEdit, setEdit] = useState(null); // this is holding the todo id
  // State to hold the new value while editing
  const [isEditedTodo, setEditedTodo] = useState(""); // this is holding the task

  // const [isToggle, setToggle] = useState(false);

  let addTask = () => {
    if (isNewTodo.trim() !== "") {
      setTodo(() => {
        return [
          ...isTodo,
          { task: isNewTodo,
            id: uuidv4(),
            isCompleted: false,
            isDone: false },
        ];
      });
      setNewTodo("");
    } else {
      alert("You cannot add an empty task.");
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (id) => {
    // item.id
    // setTodo(isTodo.filter(item => item.id !== id));
    setTodo((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id !== id));
  };

  // const [isEdit, setEdit] = useState(null) // State to track which task is being edited
  // const [isEditedTodo, setEditedTodo] = useState("") // State to hold the new value while editing

  // onClick={() => handleEditClick(item.id, item.task)}
  const handleEditClick = (id, task) => {
    setEdit(id);
    setEditedTodo(task); // Set the input value to the current task
  };

  // onChange={handleEditChange}
  const handleEditChange = (event) => {
    setEditedTodo(() => event.target.value);
  };

  // <button onClick={() => handleSaveEdit(item.id)}>Save</button>
  // Function to save the edited task
  const handleSaveEdit = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: isEditedTodo } : todo
      )
    );
    setEdit(null); // Exit edit mode
  };

  const isUporLow = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: todo.toggleCase
                ? todo.task.toUpperCase()
                : todo.task.toLowerCase(),
              toggleCase: !todo.toggleCase, // Toggle the state for this task
            }
          : todo
      )
    );
  };

  // checked={item.isDone}
  // onChange={()=> handleToggleDone(item.id)}
  const handleToggleDone = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  // const handleToggleAll = () => {
  //   setTodo((prevTodo) =>
  //     prevTodo.map((item) => ({
  //       ...item,
  //       isDone: !item.isDone, // Toggle the isDone state for all tasks
  //                 true
  //     }))
  //   );
  // };
  // COMPONENT PROP STATE EVENTS

  return (
    <div
      className="Todo"
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Dancing Script', cursive", // Custom Italic Font
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          TODO:-
        </h3>
        <input
          placeholder="Add a task"
          type="text"
          value={isNewTodo}
          onChange={updateTodoValue}
          onKeyDown={handleKeyPress}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "15px",
            fontFamily: "'Dancing Script', cursive", // Matching the font from the button
          }}
        />

        <br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
          }}
          onClick={addTask} //we cant have onClick twice in a tag
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          ADD TASK
        </button>
      </div>

      <div>
        <div
          style={{
            borderBottom: "2px solid black",
            // backgroundColor: "blue",
            width: "17vw",
            marginTop: "1vw"
          }}
        >
          <h4
            style={{
              fontSize: "1.2rem",
              // marginBottom: "10px",
              // textDecoration: "underline"
            }}
          >
            TODO LISTS THESE ITEMS
          </h4>
        </div>
        <ul>
          {isTodo.map((item) => (
            <li key={item.id} style={{ marginBottom: "5px" }}>
              {isEdit === item.id ? (
                <>
                  <input
                    type="text"
                    value={isEditedTodo}
                    // onChange={(e) => setEditedTodo(e.target.value)}
                    onChange={handleEditChange}
                    style={{
                      padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      width: "40%",
                      boxSizing: "border-box",
                      marginBottom: "5px",
                      fontFamily: "'Dancing Script', cursive",
                      
                    }}
                  />

                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onClick={() => handleSaveEdit(item.id)}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "darkgreen")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "green")
                    }
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span
                    style={
                      item.isDone ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {item.task}
                  </span>
                  <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => handleToggleDone(item.id)}
                    style={{
                      marginRight: "10px",
                      cursor: "pointer",
                      accentColor: "#007bff",
                      borderRadius: "4px",
                      transform: "scale(1.2)",
                      transition:
                        "background-color 0.3s ease, border-color 0.3s ease",
                      marginLeft: "10px",
                    }}
                  />
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#c82333")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#dc3545")
                    }
                    onClick={() => handleDelete(item.id)}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                    // if we convert it into arrow function then () => then this function will not call directly
                    // forget the _ and i is the index iif the index mattches with the existing elemenet then dont create a new array basicallt this filter method everytime it creates a new array with the following elements and rerender the state
                  >
                    X
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#ffc107",
                      color: "black",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#e0a800")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#ffc107")
                    }
                    onClick={() => handleEditClick(item.id, item.task)}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#17a2b8", // Change color as desired
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#138496")
                    } // Darker shade on hover
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#17a2b8")
                    } // Original color
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                    onClick={() => {
                      isUporLow(item.id);
                    }}
                  >
                    {item.toggleCase ? "Uppercase" : "Lowercase"}
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
// a problem is that when we update a list to either lowercase or uppercase then all the buttons for the rest or remaining of the list buttons get changed in to case if the other list is already lowecase the then we have to click twice to the list item uppercase
// Modify the toggle logic to affect only the clicked task without resetting the state for the others.
/*
Changing Todo
Implement "Done Task" feature to the todo

The issue is with the `handleToggleDone` function. In the current implementation, the `map` method does not return a new array; it modifies the existing array in place, which results in an undefined return value. This causes the state update to fail and potentially leads to the rendering issue you're seeing.

Here's the problematic part:

```javascript
const handleToggleDone = (id) => {
  setTodo((prevTodo) => {
    prevTodo.map((index) => {
      if (index.id === id) {
        return { ...index, isDone: !index.isDone };
      }
    });
  });
};
```

You need to ensure that `map` returns a new array. Here’s the corrected `handleToggleDone` function:

```javascript
const handleToggleDone = (id) => {
  setTodo((prevTodo) =>
    prevTodo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    )
  );
};
```

### Changes Made:
- `prevTodo.map(...)` now returns the updated list.
- Each item in the list is checked: if it matches the given `id`, it gets updated; otherwise, it remains unchanged.

With this correction, clicking the checkbox should update the `isDone` status of the corresponding task without causing the entire page to go blank.

Yes, you can use `if-else` statements to achieve the same result, but you still need to ensure that you are creating and returning a new array. The `map` function is designed to transform each element of the array and return a new array, so it's typically used for these kinds of updates.

However, if you prefer to use `if-else` logic, you can achieve the same result using a combination of `forEach` to iterate over the array and `slice` to create a new array. Here's an example of how you can use `if-else` logic:

```javascript
const handleToggleDone = (id) => {
  setTodo((prevTodo) => {
    // Create a copy of the array
    const updatedTodo = [...prevTodo];
    
    // Iterate over the array
    updatedTodo.forEach((item, index) => {
      if (item.id === id) {
        // Update the item if the id matches
        updatedTodo[index] = { ...item, isDone: !item.isDone };
      }
    });
    
    // Return the updated array
    return updatedTodo;
  });
};
```

### Explanation:
1. **Copy the Array**: `const updatedTodo = [...prevTodo];` creates a new array to avoid mutating the original state.
2. **Iterate and Update**: `forEach` iterates over the items in the array. If the `id` matches, the item is updated.
3. **Return the New Array**: Finally, the updated array is returned and used to update the state.

This approach works, but it’s generally more idiomatic to use `map` for such operations in React, as it directly aligns with functional programming principles and immutability.

https://www.monolisa.dev/playground

*/

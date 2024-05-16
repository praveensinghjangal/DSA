// Question1 -> Transformation of Nested Object Using Recursion //   
const assignmentObject = {
  Name: "Random person",
  Address: {
    addressLine1: "SCO 62",
    addressLine2: "City heart",
    city: "Mohali",
    state: "Punjab",
  },
  educationQualification: {
    "10th": {
      Marks: 400,
      Percentage: "80%",
    },
    "12th": {
      Marks: 400,
      Percentage: "80%",
    },
    graduation: {
      Marks: 400,
      Percentage: "80%",
    },
    postGraduation: {
      Marks: 400,
      Percentage: "80%",
    },
  },
};

function newAssignmentObject(obj, key, value) {
  function recursive(obj, key, value) {
    Object.keys(obj).forEach((element) => {
      if (element === key) {
        obj[element] = value
      } else if (typeof obj[element] === "object") {
        recursive(obj[element], key, value)
      }
    })
  }
  recursive(obj, key, value)
  return obj
}
console.log(newAssignmentObject(assignmentObject, "Marks", 100))

// Question 2 -> https://leetcode.com/problems/binary-tree-level-order-traversal/description/                //
